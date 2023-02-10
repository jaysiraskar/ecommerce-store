

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from '../pages/authentication/signin/signin.component';
import { SignupComponent } from '../pages/authentication/signup/signup.component';
import { HomeComponent } from '../pages/home/home.component';
import { OrdersComponent } from '../pages/orders/orders.component';


const routes: Routes = [ 
  { 
    path: 'sign-in', component: SigninComponent
  },
  { 
    path: 'sign-up', component: SignupComponent
  },
  { 
    path: 'orders', component: OrdersComponent
  },
  { 
  path: '**', component: HomeComponent
  },
  { 
  path: 'home', component: HomeComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
