import { Routes } from "@angular/router";
import { UthGuardService} from "./auth/services/uth-guard.service"

export const routes: Routes = [
    {
        path: '',
        loadChildren: './core/core.module#CoreModule'    ,
        canActivate : [UthGuardService]    
    },
    {
        path: '**', redirectTo: '/', pathMatch: 'full'
    }
];
