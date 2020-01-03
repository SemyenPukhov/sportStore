import { Cart } from './cart.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order.model';
import { Product } from './product.model';
import { map } from 'rxjs/operators';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDataSource {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  getProducts(): Observable<Product[]> {
    return this.get('products');
  }

  saveOrder(order: Order): Observable<Order> {
    return this.post('orders', order);
  }

  get(url: string): Observable<any> {
    return this.http.get(this.baseUrl + url).pipe(map(response => response));
  }

  post(url: string, body?: Product | Order): Observable<any> {
    return this.http.post(this.baseUrl + url, body).pipe(map(response => response));
  }
}
