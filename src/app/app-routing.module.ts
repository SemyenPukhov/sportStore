import { RouterModule, Routes } from '@angular/router';

import { CartDetailComponent } from './store/cart-detail/cart-detail.component';
import { CheckoutComponent } from './store/checkout/checkout.component';
import { NgModule } from '@angular/core';
import { StoreComponent } from './store/store.component';
import { StoreFirstGuard } from './store-first.guard';

const routes: Routes = [
  {
    path: 'store',
    component: StoreComponent,
    canActivate: [StoreFirstGuard],
  },
  {
    path: 'cart',
    component: CartDetailComponent,
    canActivate: [StoreFirstGuard],
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [StoreFirstGuard],
  },
  {
    path: '**',
    redirectTo: '/store',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [StoreFirstGuard],
  exports: [RouterModule],
})
export class AppRoutingModule {}
