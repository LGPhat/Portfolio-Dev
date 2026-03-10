import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tabbar } from './tabbar';

describe('Tabbar', () => {
  let component: Tabbar;
  let fixture: ComponentFixture<Tabbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tabbar],
    }).compileComponents();

    fixture = TestBed.createComponent(Tabbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
