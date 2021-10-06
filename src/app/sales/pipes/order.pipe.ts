import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/sales.interfaces';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: Heroe[], orderBy: string = 'empty'): Heroe[] {
    switch(orderBy) {
      case 'name': {
        return value.sort((a,b) => (a.nombre > b.nombre) ? 1 : -1);
        break;
      }
      case 'fly': {
        return value.sort((a,b) => (a.vuela > b.vuela) ? 1 : -1);
        break;
      }
      case 'color': {
        return value.sort((a,b) => ((a.color)> b.color) ? 1 : -1);
        break;
      }
      default: {
        return value;
      }
    }
  }

}
