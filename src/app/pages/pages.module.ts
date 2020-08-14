import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos
import { PagesRoutingModule } from './pages.routing';

import { PagesComponent } from './pages.component';


@NgModule({
    declarations: [
        PagesComponent
    ],
    exports: [
        PagesComponent
    ],
    imports: [
        BrowserModule,
        PagesRoutingModule
    ],
    bootstrap: [PagesComponent]
})
export class PagesModule { }
