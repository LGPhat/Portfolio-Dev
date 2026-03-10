import { Component, EventEmitter, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mobile-tabbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabbar.html',
  styleUrl: './tabbar.scss'
})
export class MobileTabbar {
  // THÊM DÒNG NÀY VÀO ĐÂY:
  @Output() tabChanged = new EventEmitter<string>();

  activeTab = signal('home');

  setActive(tab: string) {
    this.activeTab.set(tab);
    console.log('Đang phát tín hiệu chuyển tab:', tab);

    // Bây giờ lệnh này sẽ không còn báo lỗi nữa
    this.tabChanged.emit(tab);
  }
}
