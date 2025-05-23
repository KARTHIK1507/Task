import { Routes } from '@angular/router';
import { FormComponentComponent } from './pages/form-component/form-component.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'new-form',
        pathMatch:'full'
    },
    {
        path:'new-form',
        component:FormComponentComponent
    },
    {
        path:'**',
        component:PageNotFoundComponent
    }
];
