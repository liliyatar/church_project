import { Component, OnInit } from '@angular/core';
declare function animItems (): any;

@Component({
  selector: 'app-resources-page',
  templateUrl: './resources-page.component.html',
  styleUrls: ['./resources-page.component.css']
})
export class ResourcesPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    animItems();
  }

}
