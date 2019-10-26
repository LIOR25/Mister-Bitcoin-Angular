import { Component } from '@angular/core';
import { HomePageComponent } from './pages/home-page/home-page.component'
import { ContactListComponent } from './components/contact-list/contact-list.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Mister-Bitcoin-Angular';
}
