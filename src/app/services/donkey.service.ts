import { Injectable } from '@angular/core';

export interface Donkey {
  name: string;
  origin: string;
  birthday: Date;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class DonkeyService {
  private _donkeys: Donkey[] = [];

  createDonkey(donkey: Donkey) {
    console.log(donkey);
    this._donkeys.push(donkey);
  }
}
