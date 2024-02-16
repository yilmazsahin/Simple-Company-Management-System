import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomersComponent } from './components/customers/customers.component';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './components/orders/orders.component';
const routes: Routes = [
  { path: 'orders', component: OrdersComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CustomersComponent,
    OrdersComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
