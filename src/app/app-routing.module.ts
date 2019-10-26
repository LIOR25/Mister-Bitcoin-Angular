import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { SignupComponent } from './pages/signup/signup.component';


const routes: Routes = [
  {path: 'home' , component: HomePageComponent},
  {path: 'contacts' , component: ContactPageComponent },
  {path: 'contact/edit' , component: ContactEditPageComponent},
  {path: 'contact/:id' , component: ContactDetailsPageComponent},
  {path: 'statistic' , component: StatisticComponent},
  {path: 'signup' , component: SignupComponent},


  {path: '' , redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
