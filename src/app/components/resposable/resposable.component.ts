import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
// import Swal from 'sweetalert2';
import { ActividadesService } from '../../services/actividades.service';

@Component({
  selector: 'app-resposable',
  templateUrl: './resposable.component.html',
  styleUrls: ['./resposable.component.css']
})
export class ResposableComponent implements OnInit {

  // variables de ngmodel
  nombres: string;
  apellidos: string;
  identificacion: string;
  email: string;
  telefono: string;

  // responsable = {
  //   nombres: this.nombres,
  //   apellidos: this.apellidos,
  //   identificacion: this.identificacion,
  //   email: this.email,
  //   telefono: this.telefono
  // };

  constructor(
    private actividadesService: ActividadesService,
  ) { }

  ngOnInit() {
  }

  agregarResponsable() {
    const responsable = {
      Nombres: this.nombres,
      Apellidos: this.apellidos,
      NumeroIdentificacion: this.identificacion,
      Email: this.email,
      Telefono: this.telefono
    };
    console.log(responsable);
    // this.actividadesService.get('estado/?limit=0')
    //     .subscribe(res => {
    //       if (res !== null) {
    //         console.log(res);
    //       }
    //     },
    //     (error: HttpErrorResponse) => {
    //       console.log('error en la peticion');
    //       console.log(error);
        // });
        this.actividadesService.post('responsable', responsable)
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
