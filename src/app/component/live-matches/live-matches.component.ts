import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-live-matches',
  templateUrl: './live-matches.component.html',
  styleUrls: ['./live-matches.component.scss']
})
export class LiveMatchesComponent implements OnInit {

  matches: any[] = [];
  loading: boolean = true; // loading state

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getLiveMatches().subscribe({
      next: (data: any) => {
        console.log('Live Matches:', data);
        // RapidAPI structure অনুযায়ী safer assignment
        this.matches = data?.data || [];
        this.loading = false;
      },
      error: (err: any) => {
        console.error('API Error', err);
        this.matches = [];
        this.loading = false;
      }
    });
  }

}
