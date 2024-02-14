import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { AppRoutingModule } from '../app-routing.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactBottomSheetComponent } from './bottom-sheets/contact-bottom-sheet/contact-bottom-sheet.component';
@NgModule({
  declarations: [LayoutComponent, ToolbarComponent, ContactBottomSheetComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    AngularMaterialModule,
    FontAwesomeModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
