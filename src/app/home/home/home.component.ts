import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { GetInTouchDialogComponent } from '../../layout/dialogs/get-in-touch-dialog/get-in-touch-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}
  title: string = 'Adams Puppies';

  openBottomSheet(): void {
    this._bottomSheet.open(GetInTouchDialogComponent);
  }
}
