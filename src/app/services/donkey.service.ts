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
  static STORAGE_USER_DONKEYS_KEY = 'user_donkeys';
  private _donkeys: Donkey[] = [];
  private _userDonkeys: Donkey[] = [];

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

  get userDonkeys() {
    return this._userDonkeys;
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

  adoptDonkey(index: number) {
    this._userDonkeys.push(this._donkeys[index]);
    this._donkeys.splice(index, 1);
  }
}
