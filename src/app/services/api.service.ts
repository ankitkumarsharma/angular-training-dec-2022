import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly baseUrl:string = 'https://dummyjson.com/'
  constructor(private httpClient: HttpClient) { }

  getData(){
    return this.httpClient.get(this.baseUrl+'products');
  }
  getSingleProduct(item:any){
    return this.httpClient.get(`${this.baseUrl}products/${item.id}`);
  }
}
