import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private login: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.pattern(/[\w-]+@([\w-]+\.)+[\w-]+[^._\-+]$/), Validators.required]),
      pwd: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    console.log('LOGIN ENVIADO');

    const formData = new FormData();
    formData.append('email', this.loginForm.get('email').value);
    formData.append('pwd', this.loginForm.get('pwd').value);

    this.login.login(formData).subscribe(
      response => {
        this.login.setUserData(response);
        this.router.navigate(['/']);
      },
      error => console.error(error)
    )
  }

}
