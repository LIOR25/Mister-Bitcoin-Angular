import { Component, OnInit, Input } from '@angular/core';
import Contact from 'src/app/models/Contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  @Input() contacts: Contact[] = null;

  constructor() {}

  ngOnInit() {}
}
