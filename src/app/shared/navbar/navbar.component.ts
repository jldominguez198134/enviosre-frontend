import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  title: string;

  constructor() { }

  ngOnInit(): void {
    this.title = 'Este es el título';
  }

  hazAlgo() {
    alert('hola');
  }

}
