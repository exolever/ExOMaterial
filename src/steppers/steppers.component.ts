import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'exo-stepper',
  templateUrl: './steppers.component.html',
  styleUrls: ['./steppers.component.css']
})
export class ExoStepperComponent implements OnInit {
  arr: any = [];
  arrayUrls: Array<string>;
  active: number = 0;
  @Input('elements') elements: number;
  @Input('size') size: string;
  @Input('color') color: string;
  @Input('content') content: string;
  @Input('urls') urls: string;

  constructor(private router: Router) {

   }

  ngOnInit() {
    this.arrayUrls = this.urls.split(',');
    this.calcNumber();
  }

  private calcNumber() {
    let childUrl: Array<string> = this.router.url.split('/');
    this.arrayUrls.map((child, key) => {
      this.arr.push({ 'position': key, 'url': this.arrayUrls[key] });
      if (child === childUrl[childUrl.length - 1]) {
        this.active = key + 1;
      }
    });
  }
}
