import { Component, OnInit } from '@angular/core';
declare function animItems (): any;

@Component({
  selector: 'app-introduction-page',
  templateUrl: './introduction-page.component.html',
  styleUrls: ['./introduction-page.component.css']
})
export class IntroductionPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    animItems();
  }

}
