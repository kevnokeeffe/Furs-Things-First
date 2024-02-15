import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ContactBottomSheetComponent } from '../../layout/bottom-sheets/contact-bottom-sheet/contact-bottom-sheet.component';

@Component({
  selector: 'app-about-mobile',
  templateUrl: './about-mobile.component.html',
  styleUrl: './about-mobile.component.scss',
})
export class AboutMobileComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}
  openBottomSheet(): void {
    this._bottomSheet.open(ContactBottomSheetComponent);
  }
}
