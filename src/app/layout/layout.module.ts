import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [
    CommonModule, FormsModule, RouterModule
  ],
  exports: [
    NavbarComponent, FooterComponent
  ]
})
export class LayoutModule { }
