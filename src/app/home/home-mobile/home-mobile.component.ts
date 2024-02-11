import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { GetInTouchDialogComponent } from '../../layout/dialogs/get-in-touch-dialog/get-in-touch-dialog.component';

@Component({
  selector: 'app-home-mobile',
  templateUrl: './home-mobile.component.html',
  styleUrl: './home-mobile.component.scss',
})
export class HomeMobileComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}
  openBottomSheet(): void {
    this._bottomSheet.open(GetInTouchDialogComponent, {
      data: { title: 'Get in touch' },
    });
  }
}
