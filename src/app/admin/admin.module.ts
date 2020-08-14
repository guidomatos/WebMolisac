import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modulos
// import { SharedModule } from '../shared/shared.module';

import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PromocionComponent } from './promocion/promocion.component';
import { SliderComponent } from './slider/slider.component';


@NgModule({
    declarations: [
        AdminComponent,
        DashboardComponent,
        PromocionComponent,
        SliderComponent
    ],
    exports: [
        AdminComponent
    ],
    imports: [ 
        CommonModule,
        // SharedModule,
        RouterModule
    ]
})
export class AdminModule { }
