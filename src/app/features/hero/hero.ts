import { Component, signal, afterNextRender } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero {
  // Danh sách các vai trò chuyên môn của Phát Lê
  private phrases = [
    'WordPress Developer',
    'Angular Developer',
    'Affiliate System Creator'
  ];

  // Signal quản lý chữ đang hiển thị
  displayText = signal('');
  private currentPhraseIndex = 0;
  private isDeleting = false;

  constructor() {
    afterNextRender(() => {
      this.typeEffect();
    });
  }

  private typeEffect() {
    const currentFullText = this.phrases[this.currentPhraseIndex];
    const currentVal = this.displayText();

    if (this.isDeleting) {
      // Hiệu ứng xóa chữ
      this.displayText.set(currentFullText.substring(0, currentVal.length - 1));
    } else {
      // Hiệu ứng gõ chữ
      this.displayText.set(currentFullText.substring(0, currentVal.length + 1));
    }

    // Tốc độ xử lý (Gõ chậm hơn, Xóa nhanh hơn)
    let typeSpeed = this.isDeleting ? 50 : 100;

    if (!this.isDeleting && this.displayText() === currentFullText) {
      // Dừng lại một chút khi gõ xong
      typeSpeed = 2000;
      this.isDeleting = true;
    } else if (this.isDeleting && this.displayText() === '') {
      // Chuyển sang từ tiếp theo khi đã xóa hết
      this.isDeleting = false;
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
      typeSpeed = 500;
    }

    setTimeout(() => this.typeEffect(), typeSpeed);
  }
}
