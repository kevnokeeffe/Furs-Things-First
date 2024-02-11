import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutDesktopComponent } from './about-desktop/about-desktop.component';
import { AboutMobileComponent } from './about-mobile/about-mobile.component';
import { AboutComponent } from './about/about.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';

@NgModule({
  declarations: [AboutComponent, AboutMobileComponent, AboutDesktopComponent],
  imports: [CommonModule, AboutRoutingModule, AngularMaterialModule],
})
export class AboutModule {}
