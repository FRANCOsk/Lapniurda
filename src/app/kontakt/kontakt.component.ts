import { Component } from '@angular/core';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.css'],
  standalone: false,
})
export class KontaktComponent {
  openFacebook(): void {
    window.location.assign('https://www.facebook.com');
  }

  openInstagram(): void {
    window.location.assign('https://www.instagram.com/');
  }

  openYouTube(): void {
    window.location.assign('https://www.youtube.com/');
  }
}
