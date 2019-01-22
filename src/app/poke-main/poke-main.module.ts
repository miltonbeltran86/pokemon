import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { PokeListComponent } from './containers/poke-list/poke-list.component';

import { routes } from "./routes.poke";
import { ModalSelectCollectionComponent } from './components/modal-select-collection/modal-select-collection.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PokeListComponent, ModalSelectCollectionComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ]
})
export class PokeMainModule { }
