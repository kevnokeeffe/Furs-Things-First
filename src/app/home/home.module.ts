import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { HomeDesktopComponent } from './home-desktop/home-desktop.component';
import { HomeMobileComponent } from './home-mobile/home-mobile.component';

@NgModule({
  declarations: [HomeComponent, HomeDesktopComponent, HomeMobileComponent],
  imports: [CommonModule, HomeRoutingModule, AngularMaterialModule],
})
export class HomeModule {}
