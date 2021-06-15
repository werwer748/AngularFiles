import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  // tslint:disable-next-line:typedef
  createDb() {
    const heroes = [
      { id: 11, name: 'Captain America' },
      { id: 12, name: 'Hulk' },
      { id: 13, name: 'IronMan' },
      { id: 14, name: 'SpiderMan' },
      { id: 15, name: 'Vision' },
      { id: 16, name: 'AntMan' },
      { id: 17, name: 'Thor' },
      { id: 18, name: 'Dr.Strage' },
      { id: 19, name: 'StarLoad' },
      { id: 20, name: 'Groot' }
    ];

    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
