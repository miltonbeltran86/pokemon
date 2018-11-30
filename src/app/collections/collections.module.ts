import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionsCoreComponent } from './containers/collections-core/collections-core.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes.collections';

@NgModule({
  declarations: [CollectionsCoreComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CollectionsModule { }
