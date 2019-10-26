import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

 
public save(key, val) {
    val = JSON.stringify(val)
    localStorage.setItem(key, val)
}
 
public load(key) {
    return JSON.parse(localStorage.getItem(key));
}


}
