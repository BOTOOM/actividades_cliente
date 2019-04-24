import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resposable',
  templateUrl: './resposable.component.html',
  styleUrls: ['./resposable.component.css']
})
export class ResposableComponent implements OnInit {

  // variables de ngmodel
  nombres: string;
  apellidos: string;
  identificacion: number;
  email: string;
  telefono: number;

  // responsable = {
  //   nombres: this.nombres,
  //   apellidos: this.apellidos,
  //   identificacion: this.identificacion,
  //   email: this.email,
  //   telefono: this.telefono
  // };

  constructor() { }

  ngOnInit() {
  }

  agregarResponsable() {
    const responsable = {
      nombres: this.nombres,
      apellidos: this.apellidos,
      identificacion: this.identificacion,
      email: this.email,
      telefono: this.telefono
    };
    console.log(responsable);
  }
}
