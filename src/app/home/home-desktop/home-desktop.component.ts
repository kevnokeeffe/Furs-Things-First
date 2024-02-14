import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ContactBottomSheetComponent } from '../../layout/bottom-sheets/contact-bottom-sheet/contact-bottom-sheet.component';

@Component({
  selector: 'app-home-desktop',
  templateUrl: './home-desktop.component.html',
  styleUrl: './home-desktop.component.scss',
})
export class HomeDesktopComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}
  openBottomSheet(): void {
    this._bottomSheet.open(ContactBottomSheetComponent, {
      data: { title: 'Hire me' },
    });
  }
}
