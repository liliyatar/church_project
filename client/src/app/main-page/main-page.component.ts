import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MaterialInstance, MaterialService } from '../shared/classes/material.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements AfterViewInit {
  @ViewChild('parallax1') parallax1Ref: ElementRef;
  public parallax1: MaterialInstance;
  @ViewChild('parallax2') parallax2Ref: ElementRef;
  public parallax2: MaterialInstance;
  @ViewChild('parallax3') parallax3Ref: ElementRef;
  public parallax3: MaterialInstance;

  constructor() {}

  ngAfterViewInit(): void {
    this.parallax1 = MaterialService.initParallax(this.parallax1Ref);
    this.parallax2 = MaterialService.initParallax(this.parallax2Ref);
    this.parallax3 = MaterialService.initParallax(this.parallax3Ref);
  }
}
