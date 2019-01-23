import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsCoreComponent } from './containers/collections-core/collections-core.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes.collections';
import { ModalBasicComponent } from './components/modal-basic/modal-basic.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { DetailCollectionComponent } from './components/detail-collection/detail-collection.component';


@NgModule({
  declarations: [CollectionsCoreComponent, ModalBasicComponent, DetailCollectionComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
   
  ]
  
})
export class CollectionsModule { }
