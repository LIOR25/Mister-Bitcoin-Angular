import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  router: any;

  constructor(private userService: UserService) { }

handleUserInput = (event) =>{
 this.userService.singup(event.target.value)
  console.log(event.target.value);

}

  ngOnInit() {
  }

}
