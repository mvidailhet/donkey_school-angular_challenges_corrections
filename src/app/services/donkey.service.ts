import { Injectable } from '@angular/core';

export interface Donkey {
  name: string;
  email: string;
  origin: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class DonkeyService {
  private _donkeys: Donkey[] = [];

  constructor() { }

  get donkeys() {
    return this._donkeys;
  }

  createDonkey(donkey: Donkey) {
    this._donkeys.push(donkey);
  }
}
