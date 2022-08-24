import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { MaterialInstance, MaterialService } from '../../classes/material.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit, OnDestroy {
  @ViewChild('sidenav') sidenavRef: ElementRef;
  public sidenav: MaterialInstance; 

  constructor(
    private viewportScroller: ViewportScroller,
  ) {}
  
  ngAfterViewInit(): void {
    this.sidenav = MaterialService.initSidenav(this.sidenavRef);
  }

  ngOnDestroy(): void {
    this.sidenav.destroy(); 
  }

  toDistance(value) {
    this.viewportScroller.scrollToPosition([0, value]);
  }
}
