import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Import các icon thương hiệu
import { faFacebookF, faGithub } from '@fortawesome/free-brands-svg-icons';

import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear = signal(new Date().getFullYear());

  // Khai báo icon để dùng trong HTML
  faFacebook = faFacebookF;
  faGithub = faGithub;
  faPhone = faPhone;
}
