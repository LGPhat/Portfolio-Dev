import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPaperPlane, faHandshake } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  faEnvelope = faEnvelope;
  faPaperPlane = faPaperPlane;
  faHandshake = faHandshake;

  //! Email liên hệ
  email = 'giaphatle2103@gmail.com';
}
