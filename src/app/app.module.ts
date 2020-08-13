import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CoberturaComponent } from './pages/cobertura/cobertura.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { PromocionesComponent } from './pages/promociones/promociones.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CoberturaComponent,
    NosotrosComponent,
    PromocionesComponent,
    NopagefoundComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
