import { Component, OnInit } from '@angular/core';
import { FAQS } from './faqs.info';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.scss']
})
export class QuienesSomosComponent implements OnInit {

  questions = FAQS;

  constructor() { }

  ngOnInit(): void {
  }

  resOpen(elem) {
    console.log('RESPONSE ELEMENT', elem.classList[1]);
    if (elem.classList[1]) {
      elem.classList.remove('open');
    } else {
      elem.classList.add('open');
    }
  }

}
