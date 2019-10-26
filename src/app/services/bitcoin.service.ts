import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';


@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor(private http: HttpClient, private storageService: StorageService ) { }


  
public getRate(coins): Observable<any> {
    const rate = `https://blockchain.info/tobtc?currency=USD&value=${coins}&cors=true`;
    return this.http.get(rate);
}


public getMarketPrice(): Observable<any> {
  const marketPrice = 'https://api.blockchain.info/charts/market-price?format=json&cors=true';
  return this.http.get(marketPrice)
}

// public getMarketPrice(): Observable<any> {
//     let marketPrice = this.storageService.load('priceRate')
//   if(marketPrice) return marketPrice;

//    marketPrice = 'https://api.blockchain.info/charts/market-price?format=json&cors=true';
//   this.storageService.save('priceRate',marketPrice)
//    return this.http.get(marketPrice)
// }


public getConfirmedTransactions() : Observable<any> {
  const transactions = 'https://api.blockchain.info/charts/n-transactions?format=json&cors=true'
  console.log(transactions,'ser');
  
    return this.http.get(transactions)

}


}
