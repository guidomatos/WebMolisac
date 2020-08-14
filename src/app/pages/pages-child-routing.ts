import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Paginas
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { PromocionesComponent } from './promociones/promociones.component';
import { CoberturaComponent } from './cobertura/cobertura.component';


const childRoutes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'nosotros' , component: NosotrosComponent },
    { path: 'promociones' , component: PromocionesComponent },
    { path: 'cobertura' , component: CoberturaComponent }
]



@NgModule({
    imports: [ RouterModule.forChild(childRoutes) ],
    exports: [ RouterModule ]
})
export class PagesChildRoutingModule { }
