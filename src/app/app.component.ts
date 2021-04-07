import { Component } from '@angular/core';

@Component({                  // this is a decorator 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

import class AppComponent {
  n: number = 0;
  m: number = 0;
  ans: number = 0;

  add(): void {
    this.ans = this.n + this.m;
  }
}



// export class AppComponent {
//   title = 'hello-world-angular from Chas a future programmer';
//   name: string = "Chas Johnson";
//   mytext: number = "#"

//   changeName(): void {
//     this.name = "Charles";
//   } 
//   add(): void {
//     "#vara" + "#varb";
//   }
// }
