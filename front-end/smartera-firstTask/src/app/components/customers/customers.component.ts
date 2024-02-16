import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../services/customers.service';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../../common/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent implements OnInit {
  customers: Customer[] = [];
  constructor(
    private customerService: CustomersService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.customerList();
    });
  }
  customerList() {
    this.customerService.getCustomers().subscribe((data) => {
      console.log('Customers: ' + JSON.stringify(data));
      this.customers = data;
    });
  }
}
