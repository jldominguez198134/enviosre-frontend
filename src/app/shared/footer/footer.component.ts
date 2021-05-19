import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactService } from '../../services/contact/contact.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  contactForm: FormGroup;
  submitted = false;

  constructor(
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      nombre_apellidos: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.pattern(/[\w-]+@([\w-]+\.)+[\w-]+[^._\-+]$/), Validators.required]),
      telefono: new FormControl('', [Validators.pattern(/^[6-7]{1}[0-9]{8}$/), Validators.required]),
      comentario: new FormControl('', Validators.required),
      check: new FormControl(false, Validators.requiredTrue)
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      console.error('Error en formulario');
      return;
    }

    const formData = new FormData();
    formData.append('nombre_apellidos', this.contactForm.get('nombre_apellidos').value);
    formData.append('email', this.contactForm.get('email').value);
    formData.append('telefono', this.contactForm.get('telefono').value);
    formData.append('comentario', this.contactForm.get('comentario').value);

    console.log('Datos enviados');
    this.contactService.sendMenssage(formData).subscribe(
      response => {
        console.log('Mensaje enviado correctamente', response);
        this.submitted = false;
        this.contactForm.reset();
      },
      error => console.error('Ha ocurrido un error', error) 
    );
  }

}
