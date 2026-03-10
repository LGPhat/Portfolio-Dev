import { Component, Output, EventEmitter, signal, inject, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

// Desktop Components
import { Header } from './features/header/header';
import { Hero } from './features/hero/hero';
import { Projects } from './features/projects/projects';
import { Contact } from './features/contact/contact';
import { Footer } from './features/footer/footer';
import { Skills } from "./features/skills/skills";

// Mobile Components
import { MobileHero } from './mobile-features/hero/hero';
import { MobileNav } from './mobile-features/nav/nav';
import { MobileTabbar } from './mobile-features/tabbar/tabbar';
import { MobileProjects } from './mobile-features/projects/projects';
import { MobileSkills } from './mobile-features/skills/skills';
import { MobileContact } from './mobile-features/contact/contact';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header, Hero, Projects, Contact, Footer, Skills,
    MobileNav,
    MobileHero,
    MobileTabbar,
    MobileProjects,
    MobileSkills,
    MobileContact
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit { // Đã thêm "implements OnInit" để tường minh
  private readonly _breakpointObserver = inject(BreakpointObserver);

  isMobile = signal(false);

  ngOnInit() {
    this._breakpointObserver
      .observe([
        Breakpoints.Handset,       // Điện thoại cầm tay
        Breakpoints.Small,         // Màn hình nhỏ
        '(max-width: 991px)'       // Bất kỳ màn hình nào dưới 992px
      ])
      .subscribe(result => {
        this.isMobile.set(result.matches);
        console.log('Is Mobile View:', result.matches);
      });
  }

  // Phát tên tab ra ngoài (home, projects, ...)
  @Output() tabChanged = new EventEmitter<string>();

  activeTab = signal('home');

  setActive(tab: string) {
    this.activeTab.set(tab);
    this.tabChanged.emit(tab); // Báo cho App component biết để chuyển trang
  }

  // 1. Phải khai báo Signal này
  currentTab = signal('home');

  // 2. Hàm này phải đặt tên khớp hoàn toàn với app.html
  onTabChange(tabName: any) { // Đổi từ string sang any
    this.currentTab.set(tabName);
    window.scrollTo(0, 0);
  }
}
