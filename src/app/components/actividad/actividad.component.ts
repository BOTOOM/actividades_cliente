import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
// import Swal from 'sweetalert2';
import { ActividadesService } from '../../services/actividades.service';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.css']
})
export class ActividadComponent implements OnInit {

  // variables de ngmodel
  Nombre: string;
  FechaCreacion: Date = new Date();
  FechaLimite: Date = new Date();
  Estado: number;
  Responsable: number;
  actividades: any = [];

  constructor(
    private actividadesService: ActividadesService,
  ) {
    this.actividadesService.get('actividades/?limit=0')
        .subscribe(res => {
          if (res !== null) {
            // console.log(res);
            this.actividades = res;
            console.log(this.actividades);
          }
        },
        (error: HttpErrorResponse) => {
          console.log('error en la peticion');
          console.log(error);
        });
  }

  ngOnInit() {
  }

  agregarResponsable() {
    const actividad = {
      Nombre: this.Nombre,
      FechaCreacion: this.FechaCreacion,
      FechaLimite: this.FechaLimite,
      Estado: {
        Id: 1},
      Responsable: {
        Id: this.Responsable}
    };
    console.log(actividad);
        this.actividadesService.post('actividades', actividad)
        .subscribe(res => {
          if (res !== null) {
            console.log(res);
          }
        },
        (error: HttpErrorResponse) => {
          console.log('error en la peticion');
          console.log(error);
        });
  }

}
