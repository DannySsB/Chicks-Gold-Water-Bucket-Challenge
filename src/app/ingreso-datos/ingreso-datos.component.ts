import { Component } from '@angular/core';
import { SolucionService } from '../solucion/solucion.service';

@Component({
  selector: 'app-ingreso-datos',
  templateUrl: './ingreso-datos.component.html',
  styleUrls: ['./ingreso-datos.component.css']
})
export class IngresoDatosComponent {
  jug_x:string = '';
  jug_y:string = '';
  cap_z:string = '';
  stepOrder: any[] = [];
  showMessage: string = ""

    constructor(private SolucionService: SolucionService) {}

  noDecimals(event:any, option:number) {
    if(event.key=== '.' || event.key === '-' || event.key === 'e' || event.key === 'E'){
      event.preventDefault();
    }

    switch(option) {
      case 1:
        if(!this.jug_x && event.key === '0') {
          event.preventDefault();
        }
        break;

      case 2:
        if(!this.jug_y && event.key === '0') {
          event.preventDefault();
        }
        break;

      case 3:
        if(!this.cap_z && event.key === '0') {
          event.preventDefault();
        }
        break;
    }
  }

  checkFields(){
    return !this.jug_x || !this.jug_y || !this.cap_z;
  }

  solve() {
    let x = Number(this.jug_x);
    let y = Number(this.jug_y);
    let z = Number(this.cap_z);

      this.stepOrder = this.SolucionService.resolverWaterJug(x,y,z);

    if(this.stepOrder.length > 0) {
      this.showMessage = "";
    }

    else {
      this.showMessage = "No Solution";
    }
  }
}

