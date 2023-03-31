import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IngresoDatosComponent } from './ingreso-datos/ingreso-datos.component';
import { SolucionService } from './solucion/solucion.service';
import { TablaResultadosComponent } from './tabla-resultados/tabla-resultados.component';
import { MatTableModule } from '@angular/material/table'
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    IngresoDatosComponent,
    TablaResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    FormsModule,
  ],
  providers: [SolucionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
