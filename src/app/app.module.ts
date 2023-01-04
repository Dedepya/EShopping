import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AccountComponent } from './account/account.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AccountComponent,
    ProductComponent,
    SearchComponent,
    CartComponent,
    OrderComponent,
    PaymentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
