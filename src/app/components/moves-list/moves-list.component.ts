import { Component, OnInit, Input } from '@angular/core';
import Move from 'src/app/models/Move';
import { UserService } from '../../services/user.service';
import User from 'src/app/models/User';

@Component({
  selector: 'app-moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent implements OnInit {
  moves: Move[];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.moves.subscribe(showMoves => {
      this.moves = showMoves;

    });
    console.log(this.moves);
  }
}
