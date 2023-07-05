import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild, OnInit } from '@angular/core';
import { MaterialInstance, MaterialService } from '../../classes/material.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild('sidenav') sidenavRef: ElementRef;
  public sidenav: MaterialInstance; 
  @ViewChild('dropdown') dropdownRef: ElementRef;
  public dropdown: MaterialInstance; 
  @ViewChild('dropdown2') dropdown2Ref: ElementRef;
  public dropdown2: MaterialInstance;
  @ViewChild('dropdown3') dropdown3Ref: ElementRef;
  public dropdown3: MaterialInstance;

  constructor(
    private viewportScroller: ViewportScroller,
  ) {}

  ngOnInit(): void {
  }
  
  ngAfterViewInit(): void {
    this.sidenav = MaterialService.initSidenav(this.sidenavRef);
    this.dropdown = MaterialService.initDropDown(this.dropdownRef);
    this.dropdown2 = MaterialService.initDropDown(this.dropdown2Ref);
    this.dropdown3 = MaterialService.initDropDown(this.dropdown3Ref);
  }

  ngOnDestroy(): void {
    this.sidenav.destroy(); 
  }

  toDistance(value) {
    this.viewportScroller.scrollToPosition([0, value]);
  }
}
