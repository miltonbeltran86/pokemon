import { Routes } from "@angular/router";
import { CoreComponent } from "./containers/core/core.component";
import { UthGuardService } from "../auth/services/uth-guard.service";
export const routes:Routes = [
    {
        path: 'main',
        component: CoreComponent,
        canActivate:[UthGuardService],
        children: [
            {
                path: 'pokemons',
                loadChildren: '../poke-main/poke-main.module#PokeMainModule'
            },
            {
                path: 'collection',
                loadChildren: '../collections/collections.module#CollectionsModule'
            },
            {
                path:"favorites",
                loadChildren: '../favorites/favorites.module#FavoritesModule'
            },
            {
                path: '', redirectTo: 'pokemons', pathMatch: 'full'
            }
        ]
    },
    {
        path: '', redirectTo: 'main', pathMatch: 'full'
    }
]; 
