import { Injectable } from '@angular/core';

export interface Donkey {
  name: string;
  email: string;
  origin: string;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class DonkeyService {
  private _donkeys: Donkey[] = [];

  constructor() {
    const donkeysString = localStorage.getItem('donkeys');
    if (!donkeysString) return;
    this._donkeys = JSON.parse(donkeysString);
  }

  get donkeys() {
    return this._donkeys;
  }

  createDonkey(donkey: Donkey) {
    this._donkeys.push(donkey);
    localStorage.setItem('donkeys', JSON.stringify(this._donkeys));
  }
}
