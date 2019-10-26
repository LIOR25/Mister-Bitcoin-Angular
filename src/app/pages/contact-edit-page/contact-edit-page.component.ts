import { Component, OnInit } from '@angular/core';
import Contact from 'src/app/models/Contact';
import { ContactService } from 'src/app/services/contact.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-contact-edit-page',
  templateUrl: './contact-edit-page.component.html',
  styleUrls: ['./contact-edit-page.component.scss']
})
export class ContactEditPageComponent implements OnInit {

  currContact: Contact = null;
  
    get userImg() {
       if (this.currContact._id) {
         return 'https://robohash.org/' + this.currContact._id;
       } else return 'https://robohash.org/' + Math.random();
     }

  constructor(
    private contactService:ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params.id;
      if(id){
      this.contactService.getContactById(id).subscribe(contact =>{
        this.currContact = {...contact }
      })
    }else {
      this.currContact = new Contact('','','',100,[]);
    }
    });


    
  }

  updateContact(){
    this.contactService.saveContact(this.currContact);
    this.router.navigate(['/contacts']);

  }
}
