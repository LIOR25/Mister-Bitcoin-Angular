import { Component, OnInit } from '@angular/core';
import { BitcoinService  } from '../../services/bitcoin.service'
import { from } from 'rxjs';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {

 marketPriceData = null;
 transcPerDay = null;

  constructor(private BitCoinService: BitcoinService) {}

  ngOnInit() {
    this.BitCoinService.getMarketPrice().subscribe(data => {
      this.marketPriceData = data;
    });
    this.BitCoinService.getConfirmedTransactions().subscribe(data=>{
   this.transcPerDay = data;
   console.log(this.transcPerDay,'transaction');
   
    })
  
  }
}
