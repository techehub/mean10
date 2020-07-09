import { Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http'
import { Observable } from 'rxjs';
import { IProduct } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {

  url : string ="/assets/productdata.json"
  //products: any= [{'id': "111", 'name':"product A"},
  //{'id': "222", 'name':"product B"}]

  constructor( private httpClient: HttpClient) {
    console.log (" product service created ")
   }

  public getproduct (): Observable<IProduct[]> {
    console.log ("getting product from sevice ")
    return this.httpClient.get <IProduct[]> (this.url)

    //return this.products

  }
}
