import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tabla-resultados',
  templateUrl: './tabla-resultados.component.html',
  styleUrls: ['./tabla-resultados.component.css']
})
export class TablaResultadosComponent implements OnInit {
[x: string]: any;

  @Input() stepsArray:any[] = []
  @Input() showMessage: string=""

  displayedColumns: string[] = ['x', 'y', 'instruction'];

  ngOnInit(): void {
  }

}
