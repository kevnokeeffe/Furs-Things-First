import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { GetInTouchDialogComponent } from '../../layout/dialogs/get-in-touch-dialog/get-in-touch-dialog.component';

@Component({
  selector: 'app-home-desktop',
  templateUrl: './home-desktop.component.html',
  styleUrl: './home-desktop.component.scss',
})
export class HomeDesktopComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}
  openBottomSheet(): void {
    this._bottomSheet.open(GetInTouchDialogComponent, {
      data: { title: 'Get in touch' },
    });
  }
}
