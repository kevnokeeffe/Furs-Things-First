import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ContactBottomSheetComponent } from '../../layout/bottom-sheets/contact-bottom-sheet/contact-bottom-sheet.component';

@Component({
  selector: 'app-about-desktop',
  templateUrl: './about-desktop.component.html',
  styleUrl: './about-desktop.component.scss',
})
export class AboutDesktopComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}
  openBottomSheet(): void {
    this._bottomSheet.open(ContactBottomSheetComponent);
  }
}
