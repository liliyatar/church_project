import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-top',
  templateUrl: './button-top.component.html',
  styleUrls: ['./button-top.component.css']
})
export class ButtonTopComponent implements OnInit {
  showScrollButton: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showScrollButton = window.pageYOffset > 100; // Показывать кнопку, когда пользователь прокручивает страницу на 100 пикселей вниз
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Плавно прокрутить страницу вверх
  }


}
