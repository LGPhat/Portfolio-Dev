import { Component, HostListener, signal } from '@angular/core';
import { LucideAngularModule, Home, FolderCode, Mail } from 'lucide-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// Import icon cụ thể
import { faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faAngular, faWordpress } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule, FontAwesomeModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
[x: string]: any;

  //*  Khai báo các icon bạn muốn dùng
  readonly HomeIcon = Home;
  readonly ProjectIcon = FolderCode;
  readonly ContactIcon = Mail;

  //* Khai báo biến để dùng ngoài HTML
  faWordpress = faWordpress;
  faAngular = faAngular;
  faCode = faCode;
  faEnvelope = faEnvelope;

  // Dùng Signal để quản lý trạng thái cuộn
  isScrolled = signal(false);

  @HostListener('window:scroll', [])
  onWindowScroll() {
    //! Nếu cuộn quá 50px thì đổi trạng thái
    this.isScrolled.set(window.scrollY > 50);
  }
}
