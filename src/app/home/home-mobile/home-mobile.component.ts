import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-home-mobile',
  templateUrl: './home-mobile.component.html',
  styleUrl: './home-mobile.component.scss',
})
export class HomeMobileComponent {
  constructor(private _bottomSheet: MatBottomSheet) {}
}
