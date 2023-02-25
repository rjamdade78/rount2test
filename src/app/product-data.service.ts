import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Iuser } from './common/user';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  public baseUrl : string = 'http://localhost:3000'
  // /product
  image: string = ''
  constructor(private http: HttpClient) { }
  getproduct(){
    return this.http.get<Iuser[]>(`${this.baseUrl}/product`)      
  }
  

  postdat(data: Iuser){
    return this.http.post(`${this.baseUrl}/feedback`, data)
  }
}

