import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-day-tax',
  templateUrl: './day-tax.component.html',
  styleUrls: ['./day-tax.component.scss']
})
export class DayTaxComponent implements OnInit {

  taxForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.taxForm = new FormGroup({
      cantidad: new FormControl('', Validators.required),
      resultado: new FormControl('')
    })
  }

  onSubmit() {
    console.log('TASA DEL DÍA');
    
  }

}
