import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from '../../services/signup/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  passwordConfirm = false;
  // private IdControls = { 0: 'T', 1: 'R', 2: 'W', 3: 'A', 4: 'G',5: 'M',6: 'Y',7: 'F',8: 'P',9: 'D',10: 'X',11: 'B',12: 'N',13: 'J',14: 'Z',15: 'S',16: 'Q',17: 'V',18: 'H',19: 'L',20: 'C',21: 'K',22: 'E' };

  constructor(
    private signupService: SignupService
  ) { }

  ngOnInit(): void {
    // Construimos el formulario con sus validaciones
    this.signupForm = new FormGroup(
      {
        nombre: new FormControl('', Validators.required),
        apellidos: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.pattern(/[\w-]+@([\w-]+\.)+[\w-]+[^._\-+]$/), Validators.required]),
        telefono: new FormControl('', [Validators.pattern(/^[6-7]{1}[0-9]{8}$/), Validators.required]),
        // bankAccount: new FormControl(''),
        pwd: new FormControl('', Validators.required),
        pwd_repeat: new FormControl('')
      }, { validators: this.checkPasswords }
    );
  }

  /* Chequea que las contraseñas sean iguales */
  checkPasswords(group: FormGroup) {
    const password = group.get('pwd').value;
    const confirmPassword = group.get('pwd_repeat').value;
  
    // password === confirmPassword ? this.passwordConfirm = true : this.passwordConfirm = false;
    return password === confirmPassword ? null : { notSame: true };     
  }

  // Al enviar el formulario comprobamos si es válido
  onSubmit() {
    if (this.signupForm.invalid) {
      console.error('Te falta algún dato', this.signupForm.validator);
      return;
    }

    const formData = new FormData();
    formData.append('nombre', this.signupForm.get('nombre').value);
    formData.append('apellidos', this.signupForm.get('apellidos').value);
    formData.append('email', this.signupForm.get('email').value);
    formData.append('telefono', this.signupForm.get('telefono').value);
    formData.append('pwd', this.signupForm.get('pwd').value);
    formData.append('pwd_repeat', this.signupForm.get('pwd_repeat').value);

    this.signupService.createAccount(formData).subscribe(
      response => {
        console.log('Usuario creado correctamente', response);
        this.signupForm.reset();
      },
      error => console.error('Ha ocurrido un error', error) 
    );
  }

}
