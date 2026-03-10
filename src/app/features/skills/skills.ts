import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss'
})
export class Skills {
  // Dữ liệu tập trung vào EliteMart và Plugin Affiliate
  skills = signal([
    {
      title: 'Hệ sinh thái WordPress',
      category: 'Front-end',
      desc: 'Thiết kế giao diện tùy chỉnh và phát triển Plugin chuyên sâu.',
      items: ['VuaWebDigi Affiliate Plugin', 'Custom Elementor'],
      icon: 'bi-wordpress'
    },
    {
      title: 'Angular Development',
      category: 'Front-end',
      desc: 'Xây dựng ứng dụng web hiện đại (SPA) với hiệu suất cao và kiến trúc sạch.',
      items: ['Angular 21 (Signals)', 'SCSS Architecture', 'Vercel Deployment'],
      icon: 'bi-lightning-charge'
    },
    {
      title: 'SEO & Performance',
      category: 'Optimization',
      desc: 'Tối ưu hóa bộ máy tìm kiếm và tốc độ tải trang đạt chuẩn Core Web Vitals.',
      items: ['Technical SEO Audit', 'PageSpeed Optimization', 'Schema Markup'],
      icon: 'bi-graph-up-arrow'
    }
  ]);

  techStack = signal(['PHP', 'TypeScript', 'SCSS', 'Bootstrap 5', 'MySQL', 'Git', 'WordPress']);
}
