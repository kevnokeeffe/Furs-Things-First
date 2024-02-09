import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from '../app-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { GetInTouchDialogComponent } from './dialogs/get-in-touch-dialog/get-in-touch-dialog.component';

@NgModule({
  declarations: [LayoutComponent, ToolbarComponent, GetInTouchDialogComponent],
  imports: [CommonModule, AppRoutingModule, AngularMaterialModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
