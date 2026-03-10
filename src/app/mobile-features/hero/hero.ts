import { CommonModule } from '@angular/common';
import { Component, signal, OnInit, OnDestroy, inject } from '@angular/core';

@Component({
  selector: 'app-mobile-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class MobileHero {
  // Sử dụng Signal để quản lý trạng thái chữ chạy
  displayText = signal('');
  private phrases = ['WordPress Developer', 'Angular Developer'];
  private currentIdx = 0;
  private isDeleting = false;
  private timeoutId: any;

  ngOnInit() {
    this.typeEffect();
  }

  ngOnDestroy() {
    if (this.timeoutId) clearTimeout(this.timeoutId);
  }

  private typeEffect() {
    const fullText = this.phrases[this.currentIdx];
    const current = this.displayText();

    if (this.isDeleting) {
      this.displayText.set(fullText.substring(0, current.length - 1));
    } else {
      this.displayText.set(fullText.substring(0, current.length + 1));
    }

    let speed = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.displayText() === fullText) {
      speed = 2000; // Dừng lại ở chữ đầy đủ
      this.isDeleting = true;
    } else if (this.isDeleting && this.displayText() === '') {
      this.isDeleting = false;
      this.currentIdx = (this.currentIdx + 1) % this.phrases.length;
      speed = 500;
    }

    this.timeoutId = setTimeout(() => this.typeEffect(), speed);
  }
}
