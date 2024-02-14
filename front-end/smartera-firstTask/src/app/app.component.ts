import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  customers: any[] = [];
  orders: any[] = [];
  title = 'smartera-firstTask';
  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.getCustomers();
    this.getOrders();
  }
  getCustomers() {
    this.apiService.getCustomers().subscribe((data: any) => {
      this.customers = data;
    });
  }
  getOrders() {
    this.apiService.getOrders().subscribe((data: any) => {
      this.orders = data;
    });
  }
}
