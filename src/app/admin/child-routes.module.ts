import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Paginas
import { DashboardComponent } from './dashboard/dashboard.component';
import { SliderComponent } from './slider/slider.component';
import { PromocionComponent } from './promocion/promocion.component';

const childRoutes: Routes = [
    { path: '', component: DashboardComponent, data: { titulo: 'DashBoard' } },
    { path: 'slider', component: SliderComponent, data: { titulo: 'Slider' } },
    { path: 'promocion', component: PromocionComponent, data: { titulo: 'Promocion' } }
]

@NgModule({
    imports: [ RouterModule.forChild(childRoutes) ],
    exports: [ RouterModule ]
})
export class ChildRoutesModule { }
