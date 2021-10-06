import { Component } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styleUrls: ['./no-commons.component.css']
})
export class NoCommonsComponent {

public name: string = 'Micaela';
public gender: string = 'femenino';
public invitationMap = {
  'masculino': 'invitarlo',
  'femenino': 'invitarla'
}

public clients: string[] = ['Micaela', 'Lucas', 'Fernando', 'Cristian', 'Carla', 'Sandra'];
public clientMap = {
  '=0': 'no tenemos ningún cliente',
  '=1': 'tenemos un cliente',
  'other': 'tenemos # clientes'
}

public person = {
  name: 'Micaela',
  age: 37,
  adress: 'Mendoza, Argentina'
}

public heroes = [
  {
  name: 'Iron Man',
  fly: true
  },
  {
    name: 'Spiderman',
    fly: false
  },
  {
    name: 'Superman',
    fly: true
  }
]

public myObservable: Observable<number> = interval(1000);
public promiseValue = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Fin de la promesa');
  }, 3500);
});

changePerson() {
  if (this.name == 'Micaela') {
    this.name = 'Fernando';
    this.gender = 'masculino';
  } 
  else
  {
    this.name = 'Micaela';
    this.gender = 'femenino';
  }
}

deleteClient() {
  this.clients.shift();
}

}
