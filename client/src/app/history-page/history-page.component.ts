import { Component, OnInit } from '@angular/core';
declare function animItems (): any;

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    animItems();
  }

}
