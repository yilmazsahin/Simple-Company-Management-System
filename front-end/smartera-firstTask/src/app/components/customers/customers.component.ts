import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-customers',

  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css',
})
export class CustomersComponent implements OnInit {
  customers: any[] = [];
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.getCustomers();
  }
  getCustomers() {
    this.apiService.getCustomers().subscribe(
      (data: any) => {
        this.customers = data as any[];
      },
      (error) => {
        console.error('An error occured: ', error);
      }
    );
  }
}
