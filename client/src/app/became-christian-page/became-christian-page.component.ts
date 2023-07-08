import { Component, OnInit } from '@angular/core';
declare function animItems (): any;

@Component({
  selector: 'app-became-christian-page',
  templateUrl: './became-christian-page.component.html',
  styleUrls: ['./became-christian-page.component.css']
})
export class BecameChristianPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    animItems();
  }

}
