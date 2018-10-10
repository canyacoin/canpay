import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanPayExampleComponent } from 'src/app/can-pay-example/can-pay-example.component';
import { OrderComponent } from 'projects/canpay-lib/src/canexchange/order/order.component';

const routes: Routes = [
  { path: '', redirectTo: 'can-pay', pathMatch: 'full' },
  { path: 'can-pay', component: CanPayExampleComponent, },
  {
    path: 'order/:id',
    component: OrderComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
