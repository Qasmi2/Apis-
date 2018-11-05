import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  //field
  users: string[];

  constructor() {
    this.users = ['Nadeem', 'Sadin', 'Zuriaz', 'Usman'];
  }

  // functions
  getUsers() {
    return this.users;
  }
}
