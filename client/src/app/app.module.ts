import { AppInitializer } from './app-initializer';
import { APP_INITIALIZER, NgModule } from '@angular/core';
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
import { ResourcesPageComponent } from './resources-page/resources-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { CreedPageComponent } from './creed-page/creed-page.component';
import { OurValuesPageComponent } from './our-values-page/our-values-page.component';
import { IntroductionPageComponent } from './introduction-page/introduction-page.component';
import { RelationshipPageComponent } from './relationship-page/relationship-page.component';
import { ExpectationPageComponent } from './expectation-page/expectation-page.component';
import { BaptismPageComponent } from './baptism-page/baptism-page.component';
import { BecameChristianPageComponent } from './became-christian-page/became-christian-page.component';

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
      ResourcesPageComponent,
      HistoryPageComponent,
      CreedPageComponent,
      OurValuesPageComponent,
      IntroductionPageComponent,
      RelationshipPageComponent,
      ExpectationPageComponent,
      BaptismPageComponent,
      BecameChristianPageComponent
  ],
  providers: [
    AppInitializer,
    {
      provide: APP_INITIALIZER,
      useFactory: (appInitializer: AppInitializer) => () => appInitializer.initialize(),
      deps: [AppInitializer],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
