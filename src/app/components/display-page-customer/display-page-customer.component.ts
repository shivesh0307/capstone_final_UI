import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from '../../models/Customer';

@Component({
  selector: 'app-display-page-customer',
  templateUrl: './display-page-customer.component.html',
  styleUrls: ['./display-page-customer.component.css']
})
export class DisplayPageCustomerComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((result: Customer[]) => {this.customers = result; console.log(result);})
  }

  deleteCustomer(customer: Customer) {
    this.customerService.deleteCustomer(customer).subscribe((data) => {alert("Customer Deleted!"); this.ngOnInit()});
  }

}
