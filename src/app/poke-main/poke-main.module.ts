import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { PokeListComponent } from './containers/poke-list/poke-list.component';
import { PokeCardComponent } from './containers/poke-card/poke-card.component';
import { routes } from "./routes.poke";
import { ModalSelectCollectionComponent } from './components/modal-select-collection/modal-select-collection.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { PokeSimilarsComponent } from './containers/poke-similars/poke-similars.component';
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module

@NgModule({
  declarations: [PokeListComponent, ModalSelectCollectionComponent ,PokeCardComponent, PokeSimilarsComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    Ng2OrderModule 
  ]
})
export class PokeMainModule { }
