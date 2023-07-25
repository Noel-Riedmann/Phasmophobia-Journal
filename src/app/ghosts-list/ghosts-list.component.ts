import { Component, OnInit } from '@angular/core';
import { Ghost, GhostServiceService, EvidenceItem } from '../ghost-service.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-ghosts-list',
  templateUrl: './ghosts-list.component.html',
  styleUrls: ['./ghosts-list.component.css']
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

  constructor(private ghostService: GhostServiceService) {
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
  }

  onSpeedCheckboxChange(event: MatCheckboxChange) {
    const speedName = event.source.value;
    if (event.checked) {
      this.selectedSpeedNames.push(speedName);
    } else {
      this.selectedSpeedNames = this.selectedSpeedNames.filter(name => name !== speedName);
    }
    this.updateDisplayedData();
  }

    onSanityThresholdCheckboxChange(event: MatCheckboxChange) {
    const sanityThresholdName = event.source.value;
    if (event.checked) {
      this.selectedSanityThresholdNames.push(sanityThresholdName);
    } else {
      this.selectedSanityThresholdNames = this.selectedSanityThresholdNames.filter(name => name !== sanityThresholdName);
    }
    this.updateDisplayedData();
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
        this.selectedSanityThresholdNames.every(sanityThresholdName => {
          return ghost.sanityThreshold.$values.some(sanityThreshold => sanityThreshold.name === sanityThresholdName);
        })
      );
    });
    this.dataSource.data = filteredGhosts;
  }

  loadGhosts() {
    this.ghostService.getGhosts().subscribe(
      (response: Ghost[]) => {
        console.log('Received ghosts:', response);
        this.allGhosts = response;
        this.dataSource.data = this.allGhosts;
      },
      (error) => {
        console.error('Error fetching ghosts:', error);
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
}

