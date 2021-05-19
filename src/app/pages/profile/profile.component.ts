import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: any;
  showForm = false;
  addAccountForm: FormGroup;
  showOk = false;
  showKo = false;

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.user = this.loginService.getUserData();
    console.warn('USER', this.user);
    this.addAccountForm = new FormGroup({
      email: new FormControl('', [Validators.pattern(/[\w-]+@([\w-]+\.)+[\w-]+[^._\-+]$/), Validators.required]),
      cuentaBancaria: new FormControl('', Validators.required)
    });
  }

  openAccountForm() {
    this.showForm = true;
  }

  onSubmit() {
    if (this.addAccountForm.invalid) {
      console.error('Te falta algún dato', this.addAccountForm.validator);
      return;
    }

    const formData = new FormData();
    formData.append('email', this.addAccountForm.get('email').value);
    formData.append('cuentaBancaria', this.addAccountForm.get('cuentaBancaria').value);

    this.loginService.sendBankAccount(formData).subscribe(
      response => {
        console.log('Cuenta bancaria añadida correctamente', response);
        this.showOk = true;
        this.showForm = false;
        this.user.cuentaBancaria = this.addAccountForm.get('cuentaBancaria').value;
        this.loginService.setUserAccount(this.user.cuentaBancaria);
        this.addAccountForm.reset();
      },
      error => {
        console.error('Ha ocurrido un error', error);
        if (error.status === 200) {
          this.showOk = true;
          this.showForm = false;
          this.user.cuentaBancaria = this.addAccountForm.get('cuentaBancaria').value;
          this.loginService.setUserAccount(this.user.cuentaBancaria);
          this.addAccountForm.reset();
        }
      }
    );
  }

}
