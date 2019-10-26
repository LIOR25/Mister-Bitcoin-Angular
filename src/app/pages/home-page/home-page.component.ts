import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user.service'
import Contact from 'src/app/models/Contact';
import { Subscription, from } from 'rxjs';
import { BitcoinService  } from '../../services/bitcoin.service'
import { Router } from '@angular/router';
import Move from 'src/app/models/Move';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit , OnDestroy {

user: Contact;
subscription: Subscription ;
userRate = null;

moves: Move[] = []


constructor(
  private userService: UserService,
  private bitcoinService : BitcoinService,
  private router: Router
  ) { }

  ngOnInit() {

    //  this.subscription = this.userService.currentUser.subscribe(
    //   user => {
    //     this.user = user;
    //   },
    //   err => {
    //     alert(err);
    //   }
    // );

    // this.userService.loadUser();


    this.subscription = this.userService.currentUser.subscribe(user =>{
      this.user = user;
    })
    this.userService.loadUser();


      if (!this.user) {
        this.router.navigateByUrl('/signup');
        return
      }
    this.bitcoinService.getRate(this.user.coins).subscribe(rate =>{
    this.userRate = rate
    })

    this.userService.moves.subscribe(showMoves => this.moves = showMoves)
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
