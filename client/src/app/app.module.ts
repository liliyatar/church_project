import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FeedbackPageComponent } from './feedback-page/feedback-page.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    MainPageComponent,
    FeedbackPageComponent,
    LoaderComponent,
    NavbarComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
