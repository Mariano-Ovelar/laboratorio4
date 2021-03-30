import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio01',
  templateUrl: './ejercicio01.component.html',
  styleUrls: ['./ejercicio01.component.css']
})
export class Ejercicio01Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  edadUno: number = 2;
  edadDos: number = 0;
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
