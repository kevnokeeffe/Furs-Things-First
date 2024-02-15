import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-contact-bottom-sheet',
  templateUrl: './contact-bottom-sheet.component.html',
  styleUrl: './contact-bottom-sheet.component.scss',
})
export class ContactBottomSheetComponent {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<ContactBottomSheetComponent>
  ) {}

  public openMail(): void {
    window.location.href =
      'mailto:contact@fursthingsfirst.ie?subject=Furs Things First Dog Training?body=Hi Adam,';
  }

  public openPhone(): void {
    window.open('tel:+353 85 137 4535', '_system');
  }

  public closeBottomSheet(): void {
    this._bottomSheetRef.dismiss();
  }
}
