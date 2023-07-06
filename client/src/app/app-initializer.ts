import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppInitializer {
  initialize(): Promise<void> {
    return new Promise((resolve) => {
      window.onpopstate = function(event) {
        window.history.forward();
      };
      resolve();
    });
  }
}
