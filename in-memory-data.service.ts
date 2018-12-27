import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero6';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Gamoura' },
      { id: 12, name: 'Peter Quil' },
      { id: 13, name: 'Groot' },
      { id: 14, name: 'Scarlet' },
      { id: 15, name: 'Nanchos' },
      { id: 16, name: 'Captain' },
      { id: 17, name: 'Thanos' },
      { id: 18, name: 'Dr Strange' },
      { id: 19, name: 'Tony Stark' },
      { id: 20, name: 'Thor' }
    ];
    return {heroes};
  }
  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }

}
