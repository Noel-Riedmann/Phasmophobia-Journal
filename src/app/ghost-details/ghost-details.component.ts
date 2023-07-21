import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ghost, GhostServiceService, Evidence, Speed, SanityThreshold } from '../ghost-service.service';

@Component({
  selector: 'app-ghost-details',
  templateUrl: './ghost-details.component.html',
  styleUrls: ['./ghost-details.component.css']
})
export class GhostDetailsComponent implements OnInit {
  ghostDetails: Ghost | null = null;

  constructor(
    private ghostService: GhostServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadGhostDetails();
  }

  loadGhostDetails(): void {
    const ghostId = Number(this.route.snapshot.paramMap.get('id'));
    this.ghostService.getGhostDetails(ghostId).subscribe(
      (ghostDetails) => {
        this.ghostDetails = ghostDetails;
      },
      (error) => {
        console.error('Error fetching ghost details:', error);
      }
    );
  }
}
