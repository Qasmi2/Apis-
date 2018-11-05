import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(public http: Http) { }

  getusers() {
    return this.http.get('http://jsonplaceholder.typicode.com/users')
      .map(res => res.json());
  }

  adduser(user) {
    return this.http.post('http://jsonplaceholder.typicode.com/users', user)
      .map(res => res.json());
  }

  deleteUser(id) {
    return this.http.delete('http://jsonplaceholder.typicode.com/users/' + id)
      .map(res => res.json());
  }

  updateUser(user) {
    return this.http.put('http://jsonplaceholder.typicode.com/users/' + user.id, user)
      .map(res => res.json());
  }

}
