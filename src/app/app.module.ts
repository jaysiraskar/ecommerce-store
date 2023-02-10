import { SliderComponent } from '../pages/home/components/slider/slider.component';
import { HeaderComponent } from './../components/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from '../pages/home/home.component';
import { RouterModule } from '@angular/router';
import { OrdersComponent } from '../pages/orders/orders.component';
import { FooterComponent } from '../components/footer/footer.component';
import { SigninComponent } from '../pages/authentication/signin/signin.component';
import { SignupComponent } from '../pages/authentication/signup/signup.component';








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    OrdersComponent,
    SliderComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
