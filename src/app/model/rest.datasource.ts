import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

import { Cart } from './cart.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from './order.model';
import { Product } from './product.model';
import { map } from 'rxjs/operators';

type RequestMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

const PROTOCOL = 'http';
const PORT = 3500;

@Injectable()
export class RestDataSource {
  baseUrl: string;
  auth_token: string;

  constructor(private http: HttpClient) {
    this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
  }

  authenticate(user: string, pass: string): Observable<boolean> {
    return this.http.request('POST', this.baseUrl + 'login', { body: { name: user, password: pass } }).pipe(
      map((response: any) => {
        this.auth_token = response.success ? response.token : null;

        return response.success;
      })
    );
  }

  getProducts(): Observable<Product[]> {
    return this.sendRequest('GET', 'products');
  }

  saveOrder(order: Order): Observable<Order> {
    return this.sendRequest('POST', 'orders', order);
  }

  saveProduct(product: Product): Observable<Product> {
    return this.sendRequest('POST', 'products', product, true);
  }

  deleteProduct(id: number): Observable<Product> {
    return this.sendRequest('DELETE', `products/${id}`, null, true);
  }

  updateProduct(product): Observable<Product> {
    return this.sendRequest('PUT', `products/${product.id}`, product, true);
  }

  getOrders(): Observable<Order[]> {
    return this.sendRequest('GET', 'orders', null, true);
  }

  deleteOrder(id: number): Observable<Order> {
    return this.sendRequest('DELETE', `orders/${id}`, null, true);
  }

  updateOrder(order: Order): Observable<Order> {
    return this.sendRequest('PUT', `orders/${order.id}`, order, true);
  }

  private sendRequest(
    verb: RequestMethod,
    url: string,
    body?: Product | Order,
    auth: boolean = false
  ): Observable<any> {
    const headers = {};

    if (auth && this.auth_token != null) {
      headers['Authorization'] = `Bearer<${this.auth_token}>`;
    }

    return this.http.request(verb, this.baseUrl + url, { body, headers: new HttpHeaders(headers) });
  }
}
