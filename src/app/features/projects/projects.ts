import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  // Danh mục dự án
  categories = signal(['Tất cả', 'WordPress', 'Angular', 'Plugin']);
  activeCategory = signal('Tất cả');

  // Danh sách dự án thực tế của Phát Lê
  allProjects = signal([
    {
      title: 'VuaHost',
      category: 'WordPress',
      image: 'https://api.microlink.io/?url=https://vuahost.com&screenshot=true&embed=screenshot.url', //
      link: 'https://vuahost.com',
      desc: 'Giao diện thương mại hosting & vps.'
    },
    {
      title: 'VuaWebDigi Affiliate',
      category: 'Plugin',
      image: 'https://api.microlink.io/?url=https://devvwd.io.vn/dashboard-admin/&screenshot=true&embed=screenshot.url', //
      link: 'https://devvwd.io.vn/dashboard-admin/',
      desc: 'Hệ thống quản lý tiếp thị liên kết chuyên sâu.'
    },
    {
      title: 'Xưởng May ABC',
      category: 'Angular',
      image: 'https://api.microlink.io/?url=https://ads-garment-industry.vercel.app/&screenshot=true&embed=screenshot.url', //
      link: 'https://ads-garment-industry.vercel.app/',
      desc: 'Website quảng cáo dịch vụ xưởng may.'
    },
    {
      title: 'Dịch vụ sửa điện',
      category: 'Angular',
      image: 'https://api.microlink.io/?url=https://ads-electricity.vercel.app/&screenshot=true&embed=screenshot.url',
      link: 'https://ads-electricity.vercel.app/',
      desc: 'Website quảng cáo dịch vụ sửa điện.'
    }
  ]);

  // Lọc dự án dựa trên Signal activeCategory
  filteredProjects = computed(() => {
    const category = this.activeCategory();
    if (category === 'Tất cả') return this.allProjects();
    return this.allProjects().filter(p => p.category === category);
  });

  setCategory(cat: string) {
    this.activeCategory.set(cat);
  }
}
