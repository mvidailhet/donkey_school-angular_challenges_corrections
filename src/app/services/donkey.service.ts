import { Injectable } from '@angular/core';

export interface Donkey {
  name: string;
  origin: string;
  birthday: Date;
  image: string;
}

@Injectable({
  providedIn: 'root',
})
export class DonkeyService {
  static STORAGE_DONKEYS_KEY = 'donkeys';
  private _donkeys: Donkey[] = [];

  constructor() {
    this.getDonkeysFromStorage();
  }

  private getDonkeysFromStorage() {
    const storageDonkeys = localStorage.getItem(
      DonkeyService.STORAGE_DONKEYS_KEY
    );
    if (storageDonkeys) {
      this._donkeys = JSON.parse(storageDonkeys);
    }
  }

  get donkeys() {
    return this._donkeys;
  }

  private storeDonkeys() {
    localStorage.setItem(
      DonkeyService.STORAGE_DONKEYS_KEY,
      JSON.stringify(this._donkeys)
    );
  }

  createDonkey(donkey: Donkey) {
    this._donkeys.push(donkey);
    this.storeDonkeys();
  }
}
