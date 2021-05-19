import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TransferService } from '../../services/transfer/transfer.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent implements OnInit {

  transferForm: FormGroup;
  showForm = true;
  showErrorAccount = false;

  constructor(
    private transferService: TransferService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.transferForm = new FormGroup({
      email: new FormControl('', [Validators.pattern(/[\w-]+@([\w-]+\.)+[\w-]+[^._\-+]$/), Validators.required]),
      pwd: new FormControl('', Validators.required),
      cuentaBancaria: new FormControl('', Validators.required),
      cuentaBancariaDestino: new FormControl('', Validators.required),
      telefonoReceptor: new FormControl('', [Validators.pattern(/^[6-7]{1}[0-9]{8}$/), Validators.required]),
      cantidad: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.transferForm.invalid) {
      console.error('Te falta algún dato', this.transferForm.validator);
      return;
    }

    const formData = new FormData();
    formData.append('email', this.transferForm.get('email').value);
    formData.append('pwd', this.transferForm.get('pwd').value);
    formData.append('cuentaBancaria', this.transferForm.get('cuentaBancaria').value);
    formData.append('cuentaBancariaDestino', this.transferForm.get('cuentaBancariaDestino').value);
    formData.append('telefonoReceptor', this.transferForm.get('telefonoReceptor').value);
    formData.append('cantidad', this.transferForm.get('cantidad').value);

    console.log('Datos enviados');
    this.transferService.createAccount(formData).subscribe(
      response => {
        console.log('Usuario creado correctamente', response);
        this.showForm = false;
        this.transferForm.reset();
      },
      error => {
        console.error('Ha ocurrido un error', error);
        if (error.status === 200) {
          this.showForm = false;
          this.transferForm.reset();
        } else if (error.status === 409) {
          this.showErrorAccount = true;
          setTimeout(() => {
            this.router.navigate(['mi-perfil']);
          }, 7000);
        }
      }
    );
  }

}
