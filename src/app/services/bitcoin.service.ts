import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {
  constructor(
    private http: HttpClient,
    private storageService: StorageService
  ) {}

  public getRate(coins): Observable<any> {
    const rateUrl = `https://blockchain.info/tobtc?currency=USD&value=${coins}&cors=true`;
    return this.http.get(rateUrl);
  }

  public getMarketPrice(): Observable<any> {
    const marketPriceUrl =
      'https://api.blockchain.info/charts/market-price?format=json&cors=true';
    return this.http.get(marketPriceUrl);
  }

  public getConfirmedTransactions(): Observable<any> {
    const transactionsUrl =
      'https://api.blockchain.info/charts/n-transactions?format=json&cors=true';

    return this.http.get(transactionsUrl);
  }
}
