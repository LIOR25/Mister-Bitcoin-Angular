import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../../services/bitcoin.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  marketPriceData = null;
  transcPerDay = null;

  constructor(private bitCoinService: BitcoinService) {}

  ngOnInit() {
    this.bitCoinService.getMarketPrice().subscribe(data => {
      this.marketPriceData = data;
    });
    this.bitCoinService.getConfirmedTransactions().subscribe(data => {
      this.transcPerDay = data;
    });
  }
}
