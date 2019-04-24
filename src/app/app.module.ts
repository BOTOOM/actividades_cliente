import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import {HttpClientModule} from '@angular/common/http';

// rutas
import {APP_ROUTING} from './app.routes';

// compnentes
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
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTING, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
