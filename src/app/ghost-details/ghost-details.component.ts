import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ghost, GhostServiceService, Evidence, Speed, SanityThreshold } from '../ghost-service.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-ghost-details',
  templateUrl: './ghost-details.component.html',
  styleUrls: ['./ghost-details.component.css']
})
export class GhostDetailsComponent implements OnInit {
  ghostDetails: Ghost | null = null;

  constructor(
    private ghostService: GhostServiceService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const ghostName = params['name']; // Get the ghost name from the URL parameter
      this.loadGhostDetails(ghostName);
    });
  }

  loadGhostDetails(ghostName: string): void {
    this.ghostService.getGhostDetailsByName(ghostName).subscribe(
      (ghostDetails) => {
        this.ghostDetails = ghostDetails;
      },
      (error) => {
        console.error('Error fetching ghost details:', error);
      }
    );
  }


  goBack() {
    this.location.back();
  }
}
