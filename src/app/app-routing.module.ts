import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { PagesRoutingModule } from './pages/pages.routing';
import { AdminRoutingModule } from './admin/admin.routing';
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'inicio'},
    {path: '**', component: NopagefoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        PagesRoutingModule,
        AdminRoutingModule,
        AuthRoutingModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
