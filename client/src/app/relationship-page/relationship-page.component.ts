import { Component, OnInit } from '@angular/core';
declare function animItems (): any;

@Component({
  selector: 'app-relationship-page',
  templateUrl: './relationship-page.component.html',
  styleUrls: ['./relationship-page.component.css']
})
export class RelationshipPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    animItems();
  }

}
