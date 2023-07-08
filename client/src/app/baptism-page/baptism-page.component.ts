import { Component, OnInit } from '@angular/core';
declare function animItems (): any;

@Component({
  selector: 'app-baptism-page',
  templateUrl: './baptism-page.component.html',
  styleUrls: ['./baptism-page.component.css']
})
export class BaptismPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    animItems();
  }

}
