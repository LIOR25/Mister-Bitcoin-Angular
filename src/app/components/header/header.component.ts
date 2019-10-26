import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogged: Boolean;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.currentUser.subscribe(user => {
      this.isLogged = Boolean(user);
    });
  }

  onLogout() {
    this.userService.logOut();
  }
}
