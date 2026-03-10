import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-mobile-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class MobileProjects {
  // Mảng dữ liệu 4 dự án tiêu biểu của bạn
  projects = [
    {
      title: 'VuaHost',
      link: 'https://vuahost.com',
      category: 'WordPress Theme',
      image: 'https://api.microlink.io/?url=https://vuahost.com&screenshot=true&embed=screenshot.url',
      description: 'Giao diện thương mại điện tử hiện đại, tối ưu tốc độ và UI/UX theo chuẩn Apple/Tesla.',
      techs: ['WordPress', 'PHP', 'SCSS']
    },
    {
      title: 'VuaAff System',
      link: 'https://devvwd.io.vn/dashboard-admin/',
      category: 'Affiliate Plugin',
      image: 'https://api.microlink.io/?url=https://devvwd.io.vn/dashboard-admin/&screenshot=true&embed=screenshot.url',
      description: 'Hệ thống quản lý tiếp thị liên kết tùy chỉnh với mức hoa hồng mặc định 5%.',
      techs: ['Angular', 'PHP', 'SQL']
    },
    {
      title: 'Xưởng May ABC',
      link: 'https://ads-garment-industry.vercel.app/',
      category: 'E-commerce',
      image: 'https://api.microlink.io/?url=https://ads-garment-industry.vercel.app/&screenshot=true&embed=screenshot.url',
      description: 'Website giới thiệu và đặt hàng cho doanh nghiệp may mặc, triển khai trên Vercel.',
      techs: ['Angular', 'Vercel', 'Signals']
    },
    {
      title: 'Dịch vụ sửa điện',
      link: 'https://ads-electricity.vercel.app/',
      category: 'Web App',
      image: 'https://api.microlink.io/?url=https://ads-electricity.vercel.app/&screenshot=true&embed=screenshot.url',
      description: 'Website giới thiệu và dịch vụ cho doanh nghiệp sửa điện, triển khai trên Vercel.',
      techs: ['Angular Standalone', 'TypeScript', 'SCSS']
    }
  ];

  // Hàm xử lý khi nhấn nút
  viewProject(url: string | undefined) {
    if (url) {
      // Mở link ở tab mới chuẩn UX
      window.open(url, '_blank');
    } else {
      console.log('Dự án này chưa có link demo!');
    }
  }
}
