import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Pagina
import { PagesComponent } from './pages.component';


const routes: Routes = [
    { 
        path: '', 
        component: PagesComponent,
        loadChildren: () => import('./pages-child-routing').then( m => m.PagesChildRoutingModule )
    }
];



@NgModule({
    imports: [ RouterModule.forRoot( routes ) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule { }
