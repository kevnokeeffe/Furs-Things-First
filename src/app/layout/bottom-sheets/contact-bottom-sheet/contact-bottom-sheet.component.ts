import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { DeviceDetectorService } from 'ngx-device-detector';
@Component({
  selector: 'app-contact-bottom-sheet',
  templateUrl: './contact-bottom-sheet.component.html',
  styleUrl: './contact-bottom-sheet.component.scss',
})
export class ContactBottomSheetComponent {
  phoneNumber: string = '+353 85 137 4535';
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<ContactBottomSheetComponent>,
    private deviceService: DeviceDetectorService
  ) {}

  public openMail(): void {
    window.location.href =
      'mailto:contact@fursthingsfirst.ie?subject=Furs Things First Dog Training&body=Hi Adam,';
  }

  public openPhone(): void {
    const deviceInfo = this.deviceService.getDeviceInfo();
    // Check if the device is mobile using the device type property
    const isMobile = deviceInfo.deviceType === 'mobile';
    // If the device is mobile, open the tel link using window.open with _system parameter
    if (isMobile) {
      window.open(`tel:${this.phoneNumber}`, '_system');
    }
  }

  public closeBottomSheet(): void {
    this._bottomSheetRef.dismiss();
  }
}
