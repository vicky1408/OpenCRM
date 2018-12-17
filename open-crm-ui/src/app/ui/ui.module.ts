import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule
  ],
  exports: [LayoutComponent]
})
export class UiModule { }
