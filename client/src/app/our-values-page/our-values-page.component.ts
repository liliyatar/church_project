import { Component, OnInit } from '@angular/core';
declare function animItems (): any;

@Component({
  selector: 'app-our-values-page',
  templateUrl: './our-values-page.component.html',
  styleUrls: ['./our-values-page.component.css']
})
export class OurValuesPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    animItems();
  }

}
