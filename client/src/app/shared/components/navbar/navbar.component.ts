import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, OnInit, HostListener } from '@angular/core';
import { MaterialInstance, MaterialService } from '../../classes/material.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit, OnDestroy, OnInit {
  @HostListener('window:swipe', ['$event'])
  onSwipe(event: TouchEvent) {
    const touch = event.touches[0];
    const touchX = touch.clientX;
    
    const windowWidth = window.innerWidth;
    const swipeThreshold = windowWidth * 0.2; // Пороговое значение свайпа, указывающее, насколько далеко нужно просвайпить для открытия меню

    if (touchX < swipeThreshold) {
      event.preventDefault();
    }
  }
  @ViewChild('sidenav') sidenavRef: ElementRef;
  public sidenav: MaterialInstance; 
  @ViewChild('resources') resourcesRef: ElementRef;
  public resources: MaterialInstance;
  @ViewChild('collapsible') collapsibleRef: ElementRef;
  public collapsible: MaterialInstance;
  @ViewChild('faith') faithRef: ElementRef;
  public faith: MaterialInstance;

  constructor(
    private viewportScroller: ViewportScroller,
  ) {}

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.sidenav = MaterialService.initSidenav(this.sidenavRef);

    this.collapsible = MaterialService.initCollapsible(this.collapsibleRef);
    this.resources = MaterialService.initCollapsible(this.resourcesRef);
    this.faith = MaterialService.initCollapsible(this.faithRef);
  }

  ngOnDestroy(): void {
    this.sidenav.destroy(); 
  }

  toDistance(value) {
    this.viewportScroller.scrollToPosition([0, value]);
  }
}
