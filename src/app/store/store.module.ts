import { BrowserModule } from '@angular/platform-browser';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CounterDirective } from './counter.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { ModelModule } from '../model/model.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreComponent } from './store.component';

@NgModule({
  declarations: [StoreComponent, CounterDirective, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
  imports: [ModelModule, BrowserModule, FormsModule, FontAwesomeModule, RouterModule],
  exports: [StoreComponent, CartDetailComponent, CheckoutComponent],
})
export class StoreModule {}
