import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  router: any;

  constructor(private userService: UserService) {}

  handleSubmit = (form : NgForm) => {
    if (form.value.username) {
      this.userService.singup(form.value.username);
      console.log(form.value.username);
    } 
  };
}
