import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'podcast-recommendation-frontend';

  constructor(public router: Router) {
    console.log('AppComponent initialized');
  }
}