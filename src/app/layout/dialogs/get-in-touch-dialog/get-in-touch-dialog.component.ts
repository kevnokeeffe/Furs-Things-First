import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-get-in-touch-dialog',
  templateUrl: './get-in-touch-dialog.component.html',
  styleUrl: './get-in-touch-dialog.component.scss',
})
export class GetInTouchDialogComponent {
  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: { title: string }) {}
}
