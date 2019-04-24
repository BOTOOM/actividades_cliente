import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ResposableComponent } from './components/resposable/resposable.component';
import { ActividadComponent } from './components/actividad/actividad.component';
import { ActivResponableComponent } from './components/lista/activ-responable/activ-responable.component';
import { ActivEstadoComponent } from './components/lista/activ-estado/activ-estado.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ResposableComponent,
    ActividadComponent,
    ActivResponableComponent,
    ActivEstadoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
