import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
declare function animItems (): any;

@Component({
  selector: 'app-expectation-page',
  templateUrl: './expectation-page.component.html',
  styleUrls: ['./expectation-page.component.css']
})
export class ExpectationPageComponent implements OnInit {

  constructor(
    private viewportScroller: ViewportScroller,
  ) { }

  ngOnInit() {
    animItems();
  }

  toDistance(value) {
    this.viewportScroller.scrollToPosition([0, value]);
  }

}
