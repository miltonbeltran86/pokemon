import { Routes } from "@angular/router";
import { PokeListComponent } from "./containers/poke-list/poke-list.component";
import { PokeCardComponent } from "./containers/poke-card/poke-card.component";

export const routes: Routes = [
    {
        path: 'list',
        component: PokeListComponent
    },
    {
        path: '', redirectTo: 'list', pathMatch: 'full'
    },
    {
        path: 'poke-card/:id',
        component: PokeCardComponent
    }
];