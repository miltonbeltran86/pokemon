import { Routes } from "@angular/router";
import { CollectionsCoreComponent } from "./containers/collections-core/collections-core.component";

export const routes: Routes = [
    {
        path: 'collections',
        component: CollectionsCoreComponent
    },
    {
        path: '', redirectTo: 'collections', pathMatch: 'full'
    }
];