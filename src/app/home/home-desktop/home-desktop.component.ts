import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-home-desktop',
  templateUrl: './home-desktop.component.html',
  styleUrl: './home-desktop.component.scss',
})
export class HomeDesktopComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}
}
