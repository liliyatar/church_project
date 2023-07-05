import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { MaterialInstance, MaterialService } from '../shared/classes/material.service';
declare function animItems (): any;
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent implements AfterViewInit, OnInit {
  @ViewChild('parallax1') parallax1Ref: ElementRef;
  public parallax1: MaterialInstance;
  @ViewChild('parallax2') parallax2Ref: ElementRef;
  public parallax2: MaterialInstance;
  @ViewChild('parallax3') parallax3Ref: ElementRef;
  public parallax3: MaterialInstance;
  @ViewChild('carousel') carouselRef: ElementRef;
  public carousel: MaterialInstance;
  @ViewChild('slider') sliderRef: ElementRef;
  public slider: MaterialInstance;

  constructor(
    private viewportScroller: ViewportScroller,
  ) {}

  ngOnInit(): void {
    animItems();
  }

  ngAfterViewInit(): void {
    this.slider = MaterialService.initSlider(this.sliderRef);
    this.carousel = MaterialService.initCarousel(this.carouselRef);
  }

  toDistance(value) {
    this.viewportScroller.scrollToPosition([0, value]);
  }
}
