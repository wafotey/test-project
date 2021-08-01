import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DashboardComponent } from './shop/dashboard/dashboard.component';

export const routes: Routes = [
  { path:  '', component: DashboardComponent, children: [
    {path: 'home', loadChildren: () => import('./shop/home/home-routing.module').then(m => m.HomeRoutingModule)},
    {path: 'reports', loadChildren: () => import('./shop/reports/report-routing.module').then(m => m.ReportsRoutingModule)},
    {path: 'transactions', loadChildren: () => import('./shop/transactions/transactions-routing.module').then(m => m.TransactionsRoutingModule)},
    {path: 'items', loadChildren: () => import('./shop/items/items-routing.module').then(m => m.ItemsRoutingModule)},
    {path: 'customers',loadChildren: () => import('./shop/customer/customer-routing.module').then(m => m.CustomerRoutingModule)},
    {path: 'account-settings',loadChildren: () => import('./shop/account-settings/account-seetings-routing.module').then(m => m.AccountSettintsRoutingModule)},
    {path: 'orders',loadChildren: () => import('./shop/orders/orders-routing.module').then(m => m.OrdersRoutingModule)},
    {path: 'teams',loadChildren: () => import('./shop/teams/teams-routing.module').then( m => m.TeamsRoutingModule)}
  ]},
  { path: 'application', loadChildren: () => import('./application/application-routing.module').then( m => m.ApplicationRoutingModule)},
  { path: 'api-explorer', loadChildren: () => import('./api-explorer/api-explorer-routing.module').then( m => m.ApiExplorerRoutingModule)},
  { path: 'documentation', loadChildren: () => import('./documentation/documentation-routing.module').then( m => m.DocumentationRoutingModule)},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
