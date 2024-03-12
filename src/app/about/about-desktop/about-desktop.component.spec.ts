import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MatDividerModule } from '@angular/material/divider';
import {
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { AboutDesktopComponent } from './about-desktop.component';
import { ContactBottomSheetComponent } from '../../layout/bottom-sheets/contact-bottom-sheet/contact-bottom-sheet.component';

describe('AboutDesktopComponent', () => {
  let component: AboutDesktopComponent;
  let fixture: ComponentFixture<AboutDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutDesktopComponent, ContactBottomSheetComponent],
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
    fixture = TestBed.createComponent(AboutDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain elements with specific styles', () => {
    const containerElement = fixture.debugElement.query(By.css('.container'));
    expect(containerElement.nativeElement).toBeTruthy();

    const imgElement = fixture.debugElement.query(By.css('img'));
    expect(imgElement.nativeElement).toBeTruthy();

    const spanElement = fixture.debugElement.query(By.css('span'));
    expect(spanElement.nativeElement).toBeTruthy();

    const buttons = fixture.debugElement.queryAll(By.css('button'));
    expect(buttons.length).toBe(2);
  });

  //   it('should open a bottom sheet when "Contact" button is clicked', () => {
  //     spyOn(component, 'openBottomSheet');
  //     const button = fixture.debugElement.query(By.css('button'));
  //     button.triggerEventHandler('click', null);
  //     expect(component.openBottomSheet).toHaveBeenCalled();
  //   });
});
