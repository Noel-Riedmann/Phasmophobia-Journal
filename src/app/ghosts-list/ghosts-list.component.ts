import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ghost, GhostServiceService, EvidenceItem } from '../ghost-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';
import { HttpParams } from '@angular/common/http';


@Component({
  selector: 'app-ghosts-list',
  templateUrl: './ghosts-list.component.html',
  styleUrls: ['./ghosts-list.component.scss']
})
export class GhostsListComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Evidence', 'Speed', 'SanityThreshold', 'Details'];
  dataSource: MatTableDataSource<Ghost>;
  allGhosts: Ghost[] = [];
  uniqueEvidenceNames: string[] = [];
  selectedEvidenceNames: string[] = [];
  uniqueSpeedNames: string[] = [];
  uniqueSanityThresholdNames: string[] = [];
  selectedSpeedNames: string[] = [];
  selectedSanityThresholdNames: string[] = [];
  evidenceChecked: boolean[] = [];
  speedChecked: boolean[] = [];
  sanityThresholdChecked: boolean[] = [];
  isLoading: boolean = true;





  constructor(private changeDetectorRef: ChangeDetectorRef, private ghostService: GhostServiceService, private router: Router, private route: ActivatedRoute) {
    this.dataSource = new MatTableDataSource<Ghost>([]);
  }

  ngOnInit(): void {
    this.loadGhosts();
    this.ghostService.getGhosts().subscribe(ghosts => {
      let evidenceNames: string[] = [];
      let speedNames: string[] = [];
      let sanityThresholdNames: string[] = [];
      ghosts.forEach(ghost => {
        ghost.evidence.$values.forEach(evidence => {
          evidenceNames.push(evidence.name);
        });
        ghost.speed.$values.forEach(speed => {
          speedNames.push(speed.name);
        });
        ghost.sanityThreshold.$values.forEach(sanityThreshold => {
          sanityThresholdNames.push(sanityThreshold.name);
        });
      });
      this.uniqueEvidenceNames = [...new Set(evidenceNames)];
      this.uniqueSpeedNames = [...new Set(speedNames)].sort((a, b) => {
        const order = ['Slow', 'Normal', 'Fast'];
        return order.indexOf(a) - order.indexOf(b);
      });
      this.uniqueSanityThresholdNames = [...new Set(sanityThresholdNames)].sort((a, b) => {
        return parseInt(a) - parseInt(b);
      });

      // Initialize checked state arrays
      this.evidenceChecked = new Array(this.uniqueEvidenceNames.length).fill(false);
      this.speedChecked = new Array(this.uniqueSpeedNames.length).fill(false);
      this.sanityThresholdChecked = new Array(this.uniqueSanityThresholdNames.length).fill(false);

      // Restore filter state from URL
      this.route.queryParamMap.subscribe(params => {
        this.selectedEvidenceNames = params.getAll('evidence');
        this.selectedSpeedNames = params.getAll('speed');
        this.selectedSanityThresholdNames = params.getAll('sanityThreshold');
        this.updateDisplayedData();
        this.updateCheckboxes();
      });
    });
  }



  onEvidenceCheckboxChange(event: MatCheckboxChange) {
    const evidenceName = event.source.value;
    if (event.checked) {
      this.selectedEvidenceNames.push(evidenceName);
    } else {
      this.selectedEvidenceNames = this.selectedEvidenceNames.filter(name => name !== evidenceName);
    }
    this.updateDisplayedData();
    this.updateUrl();
  }

  onSpeedCheckboxChange(event: MatCheckboxChange) {
    const speedName = event.source.value;
    if (event.checked) {
      this.selectedSpeedNames.push(speedName);
    } else {
      this.selectedSpeedNames = this.selectedSpeedNames.filter(name => name !== speedName);
    }
    this.updateDisplayedData();
    this.updateUrl();
  }

  onSanityThresholdCheckboxChange(event: MatCheckboxChange) {
    const sanityThresholdName = event.source.value;
    if (event.checked) {
      this.selectedSanityThresholdNames.push(sanityThresholdName);
    } else {
      this.selectedSanityThresholdNames = this.selectedSanityThresholdNames.filter(name => name !== sanityThresholdName);
    }
    this.updateDisplayedData();
    this.updateUrl();
  }

  updateDisplayedData() {
    let filteredGhosts = this.allGhosts.filter(ghost => {
      return (
        this.selectedEvidenceNames.every(evidenceName => {
          return ghost.evidence.$values.some(evidence => evidence.name === evidenceName);
        }) &&
        this.selectedSpeedNames.every(speedName => {
          return ghost.speed.$values.some(speed => speed.name === speedName);
        }) &&
        (this.selectedSanityThresholdNames.length === 0 ||
          this.selectedSanityThresholdNames.every(sanityThresholdName => {
            return (
              ghost.sanityThreshold.$values.length === 0 ||
              ghost.sanityThreshold.$values.some(sanityThreshold => sanityThreshold.name === sanityThresholdName)
            );
          }))
      );
    });
    this.dataSource.data = filteredGhosts;
  }
  loadGhosts() {
    this.ghostService.getGhosts().subscribe(
      (response: Ghost[]) => {
        this.allGhosts = response;
        this.dataSource.data = this.allGhosts;
        this.isLoading = false;
        this.updateDisplayedData();
        this.updateCheckboxes();
      },
      (error) => {
        console.error('Error fetching ghosts:', error);
        this.isLoading = false;
      }
    );
  }


  applyFilter(event: Event) {
    console.log('applyFilter called with:', event);
    const filterValue = (event.target as HTMLInputElement).value;
    let filteredGhosts = this.allGhosts.filter(ghost => {
      return (
        ghost.name.toLowerCase().includes(filterValue.trim().toLowerCase()) &&
        this.selectedEvidenceNames.every(evidenceName => {
          return ghost.evidence.$values.some(evidence => evidence.name === evidenceName);
        }) &&
        this.selectedSpeedNames.every(speedName => {
          return ghost.speed.$values.some(speed => speed.name === speedName);
        }) &&
        this.selectedSanityThresholdNames.every(sanityThresholdName => {
          return ghost.sanityThreshold.$values.some(sanityThreshold => sanityThreshold.name === sanityThresholdName);
        })
      );
    });
    this.dataSource.data = filteredGhosts;
  }

  updateUrl() {
    let queryParams = '';
    if (this.selectedEvidenceNames.length > 0) {
      queryParams += 'evidence=' + this.selectedEvidenceNames.join('&evidence=') + '&';
    }
    if (this.selectedSpeedNames.length > 0) {
      queryParams += 'speed=' + this.selectedSpeedNames.join('&speed=') + '&';
    }
    if (this.selectedSanityThresholdNames.length > 0) {
      queryParams += 'sanityThreshold=' + this.selectedSanityThresholdNames.join('&sanityThreshold=') + '&';
    }
    const url = this.router.url.split('?')[0] + '?' + queryParams;
    this.router.navigateByUrl(url);
  }



  updateCheckboxes() {
    this.evidenceChecked = this.uniqueEvidenceNames.map(evidenceName =>
      this.selectedEvidenceNames.includes(evidenceName)
    );

    this.speedChecked = this.uniqueSpeedNames.map(speedName => this.selectedSpeedNames.includes(speedName));

    this.sanityThresholdChecked = this.uniqueSanityThresholdNames.map(sanityThresholdName =>
      this.selectedSanityThresholdNames.includes(sanityThresholdName)
    );

    this.changeDetectorRef.detectChanges();

  }

  get sanityThresholdSplitIndex(): number {
    return Math.ceil(this.uniqueSanityThresholdNames.length / 2);
  }

  clearAllFilters() {
    this.selectedEvidenceNames = [];
    this.selectedSpeedNames = [];
    this.selectedSanityThresholdNames = [];
    this.updateDisplayedData();
    this.updateCheckboxes();
    this.updateUrl();
  }

  @ViewChild('searchField')
  searchField!: ElementRef;
  onEnterPress() {
    const inputElement = this.searchField.nativeElement;
    inputElement.blur();
  }

}

