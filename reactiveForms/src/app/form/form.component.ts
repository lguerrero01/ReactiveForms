import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getTestBed } from '@angular/core/testing';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public formulario: FormGroup;
  formBuilder: any;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.crearForm();
  }
  public crearForm(){
    this.formulario= this.fb.group({
      nombre: [
        'luis',
         Validators.required
      ],
      correo: [
        '',
        Validators.compose ([
          Validators.required, 
          Validators.email
        ])
     ],
      password: [
        '', 
        Validators.compose([
          Validators.required,
          Validators.minLength(5)
        ])
      ]

    })
  }

  public agregar() {
    this.formulario.value
  }

}
