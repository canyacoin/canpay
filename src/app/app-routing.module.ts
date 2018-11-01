import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CanPayExampleComponent } from 'src/app/can-pay-example/can-pay-example.component';

const routes: Routes = [
  { path: '', redirectTo: 'can-pay', pathMatch: 'full' },
  { path: 'can-pay', component: CanPayExampleComponent, }
  // {
  //   path: 'order/:id',
  //   component: CanexOrderStatusComponent
  // },
  // {
  //   path: 'order',
  //   component: CanexOrderStatusComponent
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
