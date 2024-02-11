import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { GetInTouchDialogComponent } from '../dialogs/get-in-touch-dialog/get-in-touch-dialog.component';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
})
export class ToolbarComponent {
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  constructor(private _bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this._bottomSheet.open(GetInTouchDialogComponent, {
      data: { title: 'Hire me' },
    });
  }
}
