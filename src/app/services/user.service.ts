import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageService } from './storage.service';
import * as moment from 'moment';
import User from '../models/User';
import Move from '../models/Move';
import {  Router } from '@angular/router';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser = new BehaviorSubject<User>(null);
  user = new BehaviorSubject<User>({} as User);
  moves = new BehaviorSubject<Move[]>([]);

  constructor(private storageService: StorageService, private router: Router) {
    this.loadUser();
  }

  loadUser() {
    const currentUser = this.storageService.load('userName');
    if (currentUser) {
      this.currentUser.next(currentUser);
      this.moves.next(currentUser.moves);
    }
  }

  singup(name) {
    const newUser = new User(name, '', '', 100, []);
    this.storageService.save('userName', newUser);
    this.currentUser.next(newUser);
    this.moves.next(newUser.moves);
    this.router.navigate(['home']);
  }

  logOut() {
    this.storageService.save('userName', null);
    this.router.navigate(['signup']);
    this.currentUser.next(null);
    this.moves.next([]);
  }

  addMove(contact, amount) {
    const user = this.storageService.load('userName');
    const newAmount = user.coins - amount;
    if (newAmount < 0) {
        Swal.fire({
          title: 'Error!',
          text: 'Not enough money',
          type: 'error',
          confirmButtonText: 'ok'
        });
      return;
    }
    if (amount <= 0) {
      Swal.fire({
        title: 'Error!',
        text: 'Cant Use This Amount',
        type: 'error',
        confirmButtonText: 'ok'
      });
      return;
    }
    user.coins = newAmount;
    const move = {
      toId: contact._id,
      to: contact.name,
      at: moment().format('LLLL'),
      amount: amount
    };
    user.moves.push(move);
    this.storageService.save('userName', user);
    this.moves.next(user.moves);
  }
}
