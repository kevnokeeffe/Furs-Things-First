import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ContactBottomSheetComponent } from '../../layout/bottom-sheets/contact-bottom-sheet/contact-bottom-sheet.component';

@Component({
  selector: 'app-home-mobile',
  templateUrl: './home-mobile.component.html',
  styleUrl: './home-mobile.component.scss',
})
export class HomeMobileComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}
  openBottomSheet(): void {
    this._bottomSheet.open(ContactBottomSheetComponent);
  }
}
