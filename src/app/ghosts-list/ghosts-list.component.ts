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
  selectedEvidenceIds: number[] = [];

  constructor(private ghostService: GhostServiceService) {
    this.dataSource = new MatTableDataSource<Ghost>([]);
  }

  ngOnInit() {
    this.loadGhosts();
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

  onEvidenceSelectionChange(event: MatCheckboxChange, evidenceId: number) {
    console.log('onEvidenceSelectionChange called with:', event, evidenceId);
    const isChecked = event.checked;
    if (isChecked) {
      this.selectedEvidenceIds.push(evidenceId);
    } else {
      const index = this.selectedEvidenceIds.indexOf(evidenceId);
      if (index !== -1) {
        this.selectedEvidenceIds.splice(index, 1);
      }
    }
    this.applyFilter(new Event(''));
  }

  applyFilter(event: Event) {
    console.log('applyFilter called with:', event);
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.data = this.allGhosts.filter((ghost: Ghost) =>
      ghost.name.toLowerCase().includes(filterValue.trim().toLowerCase())
    );

    if (this.selectedEvidenceIds.length > 0) {
      this.dataSource.data = this.dataSource.data.filter((ghost: Ghost) =>
        ghost.evidence?.$values?.some((evidence: EvidenceItem) => this.selectedEvidenceIds.includes(evidence.evidenceId))
      );
    }
  }

  getUniqueEvidenceItems(): EvidenceItem[] {
    const evidenceMap: Map<string, EvidenceItem> = new Map();
    this.allGhosts.forEach((ghost) => {
      if (ghost.evidence?.$values) {
        ghost.evidence.$values.forEach((evidence: EvidenceItem) => {
          const key = evidence.name.toLowerCase();
          if (evidenceMap.has(key)) {
            evidenceMap.get(key)!.name = this.combineUniqueEvidenceNames(
              evidenceMap.get(key)!.name,
              evidence.name
            );
          } else {
            evidenceMap.set(key, { ...evidence });
          }
        });
      }
    });
    return Array.from(evidenceMap.values());
  }

  combineUniqueEvidenceNames(existingNames: string, newName: string): string {
    const existingNamesArray = existingNames.split(', ');
    if (!existingNamesArray.includes(newName)) {
      existingNamesArray.push(newName);
    }
    return existingNamesArray.join(', ');
  }
}
