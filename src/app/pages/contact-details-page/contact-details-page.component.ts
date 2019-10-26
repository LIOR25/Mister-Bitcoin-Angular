import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service'
import Contact from 'src/app/models/Contact';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { log } from 'util';
import Move from 'src/app/models/Move';
import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-contact-details-page',
  templateUrl: './contact-details-page.component.html',
  styleUrls: ['./contact-details-page.component.scss']
})
export class ContactDetailsPageComponent implements OnInit {

  currContact : Contact = null;
  subscription: Subscription;
    moves: Move[]

  
   get userImg() {
    return 'https://robohash.org/' + this.currContact._id;
  }

  constructor(
    private contactService:ContactService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService

  ) { }

  ngOnInit() {
    this.userService.moves.subscribe(showMoves => {
      this.moves = showMoves;
      
    this.subscription = this.route.params.subscribe(params => {
      const id = params['id'];
      this.contactService.getContactById(id).subscribe(contact => {
        this.currContact = contact;        
      })
    })

    })

  }

 

    deleteContact(id){
    this.contactService.deleteContact(id)
      this.router.navigate(['contacts']);
    };
  

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
