//import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ejercicio01Component } from './ejercicio01/ejercicio01.component';
import { Ejercicio02Component } from './ejercicio02/ejercicio02.component';
import { BienvenidoComponent } from './ejercicio02/components/bienvenido/bienvenido.component';
import { LoginComponent } from './ejercicio02/components/login/login.component';
import { ErrorComponent } from './ejercicio02/components/error/error.component';

const routes: Route[] = [
  { path: './', component: AppComponent },
  { path: 'ejercicio01', component: Ejercicio01Component }

];

@NgModule({
  declarations: [
    AppComponent,
    Ejercicio01Component,
    Ejercicio02Component,
    BienvenidoComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
