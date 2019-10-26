import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GoogleChartsModule } from 'angular-google-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

import {UserService} from './/services/user.service';
import { ContactPreviewComponent } from './components/contact-preview/contact-preview.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { HeaderComponent } from './components/header/header.component';
import { StatisticComponent } from './pages/statistic/statistic.component';
import { ContactFilterComponent } from './components/contact-filter/contact-filter.component';
import { ChartComponent } from './components/chart/chart.component';
import { BitcoinService } from './services/bitcoin.service';
import { StorageService } from './services/storage.service';
import { SignupComponent } from './pages/signup/signup.component';
import { TransferFundComponent } from './components/transfer-fund/transfer-fund.component';
import { MovesListComponent } from './components/moves-list/moves-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    HomePageComponent,
    ContactPreviewComponent,
    ContactPageComponent,
    ContactDetailsPageComponent,
    ContactEditPageComponent,
    HeaderComponent,
    StatisticComponent,
    ContactFilterComponent,
    ChartComponent,
    SignupComponent,
    TransferFundComponent,
    MovesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GoogleChartsModule  
  ],
  providers: [UserService , BitcoinService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
