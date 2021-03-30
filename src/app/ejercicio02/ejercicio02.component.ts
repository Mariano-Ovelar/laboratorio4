import { Component, OnInit } from '@angular/core';
import { Usuario } from './clases/usuario';

@Component({
  selector: 'app-ejercicio02',
  templateUrl: './ejercicio02.component.html',
  styleUrls: ['./ejercicio02.component.css']
})
export class Ejercicio02Component implements OnInit {
  nombre: string = "";
  clave: string = "";
  constructor() { }

  ngOnInit(): void {
  }
  usuario: Usuario = new Usuario("", "");
  Registrarse() {
    this.usuario = new Usuario(this.nombre, this.clave);
  }

}
