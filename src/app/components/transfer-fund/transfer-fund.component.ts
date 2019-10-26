import { Component, OnInit, Input } from '@angular/core';
import Contact from 'src/app/models/Contact';
import Move from 'src/app/models/Move';
import { UserService } from '../../services/user.service'
import User from 'src/app/models/User';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {
  @Input() contact: Contact;
  @Input() user: User;

  moves: Move[] = [];

  constructor(private userService: UserService) {}

  handleSubmit = (form: NgForm) => {
    this.userService.addMove(this.contact, form.value.amount);
  };

  ngOnInit() {
    this.userService.currentUser.subscribe(contact => {
      this.contact = contact;
      console.log(this.contact, 'this.contact');
    });
    this.userService.moves.subscribe(showMoves => {
      this.moves = showMoves;
      console.log(this.moves, ' this.moves');
    });
  }
}



