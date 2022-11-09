import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from '../models/Customer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  public getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${environment.apiUrl}/Customer/GetAllCustomers`);
  }
  public createCustomer(customer: Customer): Observable<Customer[]> {
    return this.http.post<Customer[]>(`${environment.apiUrl}/Customer/Add`, customer);
  }
  public deleteCustomer(customer: Customer): Observable<Customer[]> {
    return this.http.delete<Customer[]>(`${environment.apiUrl}/Customer/Delete/${customer.accountno}`);
  }
}
