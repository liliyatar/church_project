import { ViewportScroller } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MaterialInstance, MaterialService } from '../../classes/material.service';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.css']
})
export class AuthLayoutComponent implements AfterViewInit {
  @ViewChild('sidenav') sidenavRef: ElementRef;
  public sidenav: MaterialInstance;
  constructor(
    private viewportScroller: ViewportScroller,
  ) { }

  toDistance(value) {
    this.viewportScroller.scrollToPosition([0, value]);
  }

  ngOnDestroy(): void {
    this.sidenav.destroy();
  }

  ngAfterViewInit(): void {
    this.sidenav = MaterialService.initSidenav(this.sidenavRef);
  }

}
