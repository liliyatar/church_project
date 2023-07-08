import { BecameChristianPageComponent } from './became-christian-page/became-christian-page.component';
import { BaptismPageComponent } from './baptism-page/baptism-page.component';
import { ExpectationPageComponent } from './expectation-page/expectation-page.component';
import { RelationshipPageComponent } from './relationship-page/relationship-page.component';
import { OurValuesPageComponent } from './our-values-page/our-values-page.component';
import { CreedPageComponent } from './creed-page/creed-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { ResourcesPageComponent } from './resources-page/resources-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackPageComponent } from './feedback-page/feedback-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { IntroductionPageComponent } from './introduction-page/introduction-page.component';
import { MinistriesPageComponent } from './ministries-page/ministries-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'feedback',
    component: FeedbackPageComponent,
  },
  {
    path: 'resources',
    component: ResourcesPageComponent,
  },
  {
    path: 'history',
    component: HistoryPageComponent,
  },
  {
    path: 'creed',
    component: CreedPageComponent,
  },
  {
    path: 'our-values',
    component: OurValuesPageComponent,
  },
  {
    path: 'introduction',
    component: IntroductionPageComponent,
  },
  {
    path: 'relationship',
    component: RelationshipPageComponent,
  },
  {
    path: 'expectation',
    component: ExpectationPageComponent,
  },
  {
    path: 'baptism',
    component: BaptismPageComponent,
  },
  {
    path: 'christian',
    component: BecameChristianPageComponent,
  },
  {
    path: 'ministries',
    component: MinistriesPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
