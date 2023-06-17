import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {PaymentDTO} from "../../model/payment-dto.model";


@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseUrl = 'http://api.example.com/payments'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  processPayment(payment: PaymentDTO): Observable<any> {
    return this.http.post<any>(this.baseUrl, payment);
  }
}
