import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mis-proyectos';

  edadUno = 1;
  edadDos = 0;
  suma: number = 0;
  promedio: number = 0;
  

  
  Promediar() {
    this.promedio = this.suma / 2;
  }
  Sumar() {
    this.suma = this.edadUno + this.edadDos;
  }
  Calcular() {
   
    this.Sumar();
    this.Promediar();
  }
  Limpiar() {
    this.edadUno = 0;
    this.edadDos = 0;
    this.suma = 0;
    this.promedio = 0;
  }
}
