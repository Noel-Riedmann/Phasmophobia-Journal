import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { filter } from 'rxjs/operators';

export interface Ghost {
  id: number;
  name: string;
  journalInfo: string;
  strengths: string;
  weaknesses: string;
  behaviour: string;
  test: string;
  evidence: Evidence;
  speed: Speed;
  sanityThreshold: SanityThreshold;
}

export interface Evidence {
  $id: string;
  $values: EvidenceItem[];
}

export interface Speed {
  $id: string;
  $values: SpeedItem[];
}

export interface SanityThreshold {
  $id: string;
  $values: SanityThresholdItem[];
}

export interface EvidenceItem {
  evidenceId: number;
  name: string;
}

export interface SpeedItem {
  speedId: number;
  name: string;
}

export interface SanityThresholdItem {
  sanityThresholdId: number;
  name: string;
}



@Injectable({
  providedIn: 'root'
})
export class GhostServiceService {
  private apiUrl = 'https://localhost:7288/api/ghost';

  constructor(private http: HttpClient) { }

  getGhosts(): Observable<Ghost[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map((response: any) => response.$values),
      catchError((error: any) => {
        console.error('Error fetching ghost details:', error);
        return of([]);
      })
    );
  }

  getGhostDetails(ghostId: number): Observable<Ghost | null> {
    const url = `${this.apiUrl}/${ghostId}`;
    return this.http.get<any>(url).pipe(
      filter((response: any) => response !== null),
      catchError((error: any) => {
        console.error('Error fetching ghost details:', error);
        return of(null);
      })
    );
  }
}
