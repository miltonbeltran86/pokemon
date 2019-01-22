import { Routes } from "@angular/router";
import { CollectionsCoreComponent } from "./containers/collections-core/collections-core.component";
import { DetailCollectionComponent } from "./components/detail-collection/detail-collection.component";

export const routes: Routes = [
    {
        path: 'collections',
        component: CollectionsCoreComponent
    },
    {
        path: 'detailCollection/:id',
        component: DetailCollectionComponent
    },
    {
        path: '', redirectTo: 'collections', pathMatch: 'full'
    }
];