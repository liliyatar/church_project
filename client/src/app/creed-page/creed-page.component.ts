import { Component, OnInit } from '@angular/core';
declare function animItems (): any;

@Component({
  selector: 'app-creed-page',
  templateUrl: './creed-page.component.html',
  styleUrls: ['./creed-page.component.css']
})
export class CreedPageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    animItems();
  }
}
