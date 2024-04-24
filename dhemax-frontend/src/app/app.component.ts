import { Component, QueryList, ViewChildren } from '@angular/core';
import {
  SortableHeaderDirective,
  SortEvent,
  compare,
} from './directives/sortable-header.directive';
import { ChargeMapService } from "./services/charge-map.service";
import { OpenMap } from "./models/openMap";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'dhemax-frontend';
  filter: string;
  openMaps: Array<OpenMap>;
  openMap : OpenMap;

  constructor(private apiservice: ChargeMapService) {
    this.openMaps = [];
  }

  ngOnInit() {
    this.apiservice.getFrase().subscribe(datos => {

      for (let i =0 ; i< datos.length ; i++){
        this.openMap = { id: "", estado: "", operador: "", nroConexiones: "" , coordenadas: "", pais: "" };
        this.openMap
        this.openMap.id = datos[i].ID;
        this.openMap.estado = datos[i].StatusType.Title;
        this.openMap.operador = datos[i].OperatorInfo.Title;
        this.openMap.nroConexiones = datos[i].Connections.length;
        this.openMap.coordenadas = datos[i].AddressInfo.Latitude + ' / '+ datos[i].AddressInfo.Longitude;
        this.openMap.pais = datos[i].AddressInfo.Country.Title;
        this.openMaps.push(this.openMap);
      }
    });

  }

  @ViewChildren(SortableHeaderDirective)
  headers: QueryList<SortableHeaderDirective>;

  onSort({ column, direction }: SortEvent) {
    this.headers.forEach((header) => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    if (direction === '' || column === '') {
      this.openMaps = this.openMaps;
    } else {
      this.openMaps = [...this.openMaps].sort((a, b) => {
        const res = compare(a[column], b[column]);
        return direction === 'asc' ? res : -res;
      });
    }
  }




}
