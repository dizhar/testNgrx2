import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    // StoreModule.forRoot({
    //   router: routerReducer
    // }),
    // RouterModule.forRoot([
    //   // routes
    // ]),
    // StoreRouterConnectingModule.forRoot({
    //   stateKey: 'router' // name of reducer key
    // })
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})
export class NavbarModule { }
