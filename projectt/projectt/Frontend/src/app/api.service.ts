import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Account, Payment, AuthToken, ResponseMessage} from './models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  BASE_URL = 'http://127.0.0.1:8000';
  constructor(private client: HttpClient) {
    client.head('Access-Control-Allow-Origin');
  }
  login(email: string, password: string): Observable<AuthToken> {
    return this.client.post<AuthToken>(`${this.BASE_URL}/api/login/`, {
      username: email,
      password: password
    });
  }
  register(personName: string, email: string, phone: string, address: string, password: string): Observable<ResponseMessage> {
    return this.client.post<ResponseMessage>(`${this.BASE_URL}/api/register/`, {
      personName,
      email,
      phone,
      address,
      password
    });
  }
  getAccount(): Observable<Account> {
    return this.client.get<Account>(`${this.BASE_URL}/api/account/`);
  }
  saveAccountChanges(wishes: Array<string>): Observable<ResponseMessage> {
    return this.client.put<ResponseMessage>(`${this.BASE_URL}/api/account/`, {
      wishes
    });
  }
  extendSubscription(days: number, paymentMethod: string): Observable<ResponseMessage> {
    return this.client.post<ResponseMessage>(`${this.BASE_URL}/api/account/`, {
      days,
      paymentMethod
    });
  }
}
