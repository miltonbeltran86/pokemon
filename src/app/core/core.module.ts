import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { CoreComponent } from './containers/core/core.component';
import { TopNavBarComponent } from './containers/top-nav-bar/top-nav-bar.component';
import { AsideLeftComponent } from './containers/aside-left/aside-left.component';
import { MainContentComponent } from './containers/main-content/main-content.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { HeaderAsideLeftComponent } from './components/header-aside-left/header-aside-left.component';
import { TopSearchFormComponent } from './components/top-search-form/top-search-form.component';

@NgModule({
  declarations: [CoreComponent, TopNavBarComponent, AsideLeftComponent, MainContentComponent, MainMenuComponent, HeaderAsideLeftComponent, TopSearchFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
