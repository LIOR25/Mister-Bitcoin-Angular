import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import Contact from '../models/Contact';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { StorageService } from './storage.service';
import * as moment from 'moment'
import User from '../models/User';
import Move from '../models/Move';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser = new BehaviorSubject<Contact>(null)

  user = new BehaviorSubject<User>({} as User);
  moves = new BehaviorSubject<Move[]>([]);
  currContactId: Contact;

  constructor(private storageService: StorageService) { }

  // loadUser(){
  //   this.currentUser.next(new Contact('Lior','lior@lis.com','1000000',100))
  // }

// singup(name){
//   let user = this.storageService.load('userName');
//     if(name === user) return user;
// this.storageService.save('userName', name);
//   return name

// }
  

loadUser(){
  if(this.currentUser){
  const currentUser = this.storageService.load('userName')
    this.currentUser.next(currentUser)
    this.moves.next(currentUser.moves)
  }else {
  this.currentUser.next(new Contact('Lior','lior@lis.com','1000000',100,[]))
  }
      // this.followUserMove(this.currentUser, contactId)

}

 


singup(name){
 const newUser = new Contact(name, '','', 100,[])
this.storageService.save('userName', newUser);
  // return name
}



followUserMove(user, compairToId){
  if(!user) return
  
  if(compairToId){
    const userMoves = user.moves.filter(move => move.toId === compairToId)
    this.moves.next(userMoves)
  } else {
    this.moves.next(user.moves)
  }
}

 addMove(contact, amount) {
    const user = this.storageService.load('userName')
    const newAmount = user.coins - amount
    if (newAmount >= 0) {
      user.coins = newAmount
    }
    else 
    {
      console.log('Not enough money')
return
    }
    const move = {
      toId: contact._id,
      to: contact.name,
        at: moment().format('LLLL'),
      amount: amount
    }
    this.currContactId = move.toId
    user.moves.push(move)
    this.storageService.save('userName', user)

    this.followUserMove(user, this.currContactId)
    console.log(user.moves,'user.moves');
        console.log(this.moves,'moves');
  }
}
