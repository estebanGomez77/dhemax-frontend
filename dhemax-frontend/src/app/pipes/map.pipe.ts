import { Pipe, PipeTransform } from "@angular/core";
import { OpenMap } from "../models/openMap";

@Pipe({ name: "openMap" })
export class MapPipe implements PipeTransform {
  transform(values: OpenMap[], filter: string): OpenMap[] {
    if (!filter || filter.length === 0) {
      return values;
    }

    if (values.length === 0) {
      return values;
    }

    return values.filter((value: OpenMap) => {
      const estadoFound =
        value.estado.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
      const operadorFound =
        value.operador.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
      const paisFound =
        value.pais.toLowerCase().indexOf(filter.toLowerCase()) !== -1;
      if ( estadoFound || operadorFound|| paisFound ) {
        return value;
      }
    });
  }
}
