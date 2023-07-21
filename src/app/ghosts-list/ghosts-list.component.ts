import { Component, OnInit } from '@angular/core';
import { Ghost, GhostServiceService } from '../ghost-service.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ghosts-list',
  templateUrl: './ghosts-list.component.html',
  styleUrls: ['./ghosts-list.component.css']
})
export class GhostsListComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Evidence', 'Speed', 'SanityThreshold', 'Details'];
  dataSource: MatTableDataSource<Ghost>;

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
        this.dataSource.data = response;
      },
      (error) => {
        console.error('Error fetching ghosts:', error);
      }
    );
  }
}
