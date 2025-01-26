import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-podcast-library',
  templateUrl: './podcast-library.component.html',
  styleUrls: ['./podcast-library.component.css'],
})
export class PodcastLibraryComponent implements OnInit {
  podcasts: string[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.fetchPodcasts();
  }

  fetchPodcasts() {
    const token = localStorage.getItem('token');
    if (token) {
      this.authService.getPodcasts(token).subscribe(
        (data: any) => {
          this.podcasts = data.recommendations; // Adjust based on your API response
        },
        () => {
          console.error('Error fetching podcasts:');
        }
      );
    } else {
      console.error('No token found. User may not be logged in.');
    }
  }
}