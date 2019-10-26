import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Subscription, from } from 'rxjs';
import { BitcoinService } from '../../services/bitcoin.service';
import { Router } from '@angular/router';
import Move from 'src/app/models/Move';
import User from 'src/app/models/User';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {
  user: User;
  subscription: Subscription;
  bitcoinRate = null;
  moves: Move[] = [];
  title = 'Your Bitcoin-wallet';

  constructor(
    private userService: UserService,
    private bitcoinService: BitcoinService,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscription = this.userService.currentUser.subscribe(user => {
      this.user = user;
    });
    this.bitcoinService.getRate(1).subscribe(rate => {
      this.bitcoinRate = rate;
    });
    this.userService.moves.subscribe(showMoves => (this.moves = showMoves));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
