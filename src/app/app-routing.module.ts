import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { CoberturaComponent } from './pages/cobertura/cobertura.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

import { AdminRoutingModule } from './admin/admin.routing';
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'inicio'},
    {path: 'inicio' , component: InicioComponent},
    {path: 'nosotros' , component: NosotrosComponent},
    {path: 'promociones' , component: PromocionesComponent},
    {path: 'cobertura' , component: CoberturaComponent},
    {path: '**', component: NopagefoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        AdminRoutingModule,
        AuthRoutingModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
