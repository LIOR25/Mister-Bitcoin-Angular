import { Component, OnInit, OnDestroy } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import Contact from 'src/app/models/Contact';
import { Subscription } from 'rxjs';
import { filter } from 'minimatch';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit, OnDestroy {
  contacts: Contact[];
  subscription: Subscription;

  constructor(private contactService: ContactService) {}

  handleFilter = filterBy => this.contactService.getContacts(filterBy);

  ngOnInit() {
    this.subscription = this.contactService.contactsObservable.subscribe(
      contacts => {
        this.contacts = contacts;
      }
    );
    this.contactService.getContacts();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
