import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  title: string;
  user: Subscription;
  isUserLogin = false;
  userMenu = false;

  constructor(
    private login: LoginService
  ) { }

  ngOnInit(): void {
    this.title = 'Este es el título';
    this.user = this.login.subUserData.subscribe(
      user => {
        if (this.user) {
          console.log('USER', this.user);
          this.isUserLogin = true;
        }
      }
    );
  }

  openUserMenu() {
    this.userMenu = !this.userMenu;
  }

}
