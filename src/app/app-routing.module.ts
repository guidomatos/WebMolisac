import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { CoberturaComponent } from './pages/cobertura/cobertura.component';
import { LoginComponent } from './auth/login/login.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'inicio'},
    {path: 'inicio' , component: InicioComponent},
    {path: 'nosotros' , component: NosotrosComponent},
    {path: 'promociones' , component: PromocionesComponent},
    {path: 'cobertura' , component: CoberturaComponent},
    {path: 'admin' , component: LoginComponent},
    {path: '**', component: NopagefoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
