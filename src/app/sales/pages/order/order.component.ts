import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {

  public toUpperCase: boolean = true;
  public orderBy: string = '';
  public heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    }
  ];

  change() {
    this.toUpperCase = !this.toUpperCase;
  }

  changeValue(searchCriteria: string) {
    this.orderBy = searchCriteria;
  }
}
