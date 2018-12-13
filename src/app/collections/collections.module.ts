import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsCoreComponent } from './containers/collections-core/collections-core.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes.collections';
import { ModalBasicComponent } from './components/modal-basic/modal-basic.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [CollectionsCoreComponent, ModalBasicComponent],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule.forChild(routes)
   
  ]
  
})
export class CollectionsModule { }
