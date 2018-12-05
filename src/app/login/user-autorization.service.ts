import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAutorizationService {

  constructor() { }

  public setVariavel(variavel, valor) {
    localStorage.setItem(variavel, valor);
  }

  public getVariavel(variavel) {
    return localStorage.getItem(variavel);
  }
}
