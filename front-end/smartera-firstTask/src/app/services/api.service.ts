import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  apiUrl = 'http://localhost:8080/api';
  constructor(private http: HttpClient) {}
  getCustomers() {
    return this.http.get(`${this.apiUrl}/customers`);
  }
  getOrders() {
    return this.http.get(`${this.apiUrl}/orders`);
  }
  createCustomer(customerData: any) {
    return this.http.post(`${this.apiUrl}/customers`, customerData).pipe(
      catchError((error) => {
        console.error('An error occurred:', error);
        return throwError('Something went wrong!');
      })
    );
  }
  updateCustomer(customerId: number, customerData: any) {
    return this.http.put(
      `${this.apiUrl}/customers/${customerId}`,
      customerData
    );
  }
  deleteCustomer(customerId: number) {
    return this.http.delete(`${this.apiUrl}/customers/${customerId}`);
  }
  getCustomerById(customerId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/customers/${customerId}`).pipe(
      catchError((error) => {
        console.error('An error occurred:', error);
        return throwError('Something went wrong while fetching customer data!');
      })
    );
  }
  createOrder(orderData: any) {
    return this.http.post(`${this.apiUrl}/orders`, orderData).pipe(
      catchError((error) => {
        console.error('An error occurred:', error);
        return throwError('Something went wrong!');
      })
    );
  }
  updateOrder(orderId: number, orderData: any) {
    return this.http.put(`${this.apiUrl}/orders/${orderId}`, orderData).pipe(
      catchError((error) => {
        console.error('An error occurred:', error);
        return throwError('Something went wrong!');
      })
    );
  }
  deleteOrder(orderId: number) {
    return this.http.delete(`${this.apiUrl}/orders/${orderId}`);
  }
}
