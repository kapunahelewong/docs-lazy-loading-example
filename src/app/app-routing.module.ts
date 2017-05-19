import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InventoryModule } from './inventory/inventory.module';
import { InventoryListComponent } from './inventory/inventory-list/inventory-list.component';


const routes: Routes = [
  {
    path: 'customers',
    loadChildren: './customers/customers.module#CustomersModule'
  },
  {
    path: 'orders',
    loadChildren: './orders/orders.module#OrdersModule'
  },
  {
    path: 'inventory',
    component: InventoryListComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    InventoryModule
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
