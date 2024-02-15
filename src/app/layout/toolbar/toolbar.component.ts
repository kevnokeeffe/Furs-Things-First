import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { ContactBottomSheetComponent } from '../bottom-sheets/contact-bottom-sheet/contact-bottom-sheet.component';

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
    this._bottomSheet.open(ContactBottomSheetComponent);
  }
}
