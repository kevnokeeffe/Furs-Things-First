import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from './about.component';
import { AboutDesktopComponent } from '../about-desktop/about-desktop.component';
import {
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatDividerModule } from '@angular/material/divider';
import { ContactBottomSheetComponent } from '../../layout/bottom-sheets/contact-bottom-sheet/contact-bottom-sheet.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AboutComponent,
        AboutDesktopComponent,
        ContactBottomSheetComponent,
      ],
      imports: [MatDividerModule, MatBottomSheetModule],
      providers: [
        {
          provide: MatBottomSheetRef,
          useValue: {},
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize isDesktop to true', () => {
    expect(component.isDesktop).toBeTrue();
  });

  it('should update isDesktop to false if window width is less than or equal to 800px', () => {
    spyOnProperty(window, 'innerWidth').and.returnValue(800);
    component.checkScreenSize();
    expect(component.isDesktop).toBeFalse();
  });

  it('should update isDesktop to true if window width is greater than 800px', () => {
    spyOnProperty(window, 'innerWidth').and.returnValue(801);
    component.checkScreenSize();
    expect(component.isDesktop).toBeTrue();
  });
});
