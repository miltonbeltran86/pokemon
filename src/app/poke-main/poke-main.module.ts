import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { PokeListComponent } from './containers/poke-list/poke-list.component';
import { PokeCardComponent } from './containers/poke-card/poke-card.component';
import { routes } from "./routes.poke";


@NgModule({
  declarations: [PokeListComponent,PokeCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PokeMainModule { }
