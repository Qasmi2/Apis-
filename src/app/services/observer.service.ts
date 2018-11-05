import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class ObserverService {
  //field
  data: Observable<Array<string>>;

  constructor() { }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next();
      }, 1000);

      setTimeout(() => {
        observer.next();
      }, 2000);

      setTimeout(() => {
        observer.next();
      }, 3000);

      setTimeout(() => {
        observer.next();
      }, 4000);


    });

    return this.data;
  }

}
