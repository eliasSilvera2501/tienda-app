import { CurrencyPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [ReactiveFormsModule, CurrencyPipe, UpperCasePipe, LowerCasePipe],
  templateUrl: './formulario.html',
  styleUrl: './formulario.scss',
})
export class Formulario {

  fb= inject(FormBuilder);

  formulario:FormGroup= this.fb.group({

    nombre:['',Validators.required],
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.minLength(8)]]



  });

  enviar(){
    if(this.formulario.valid){
      console.log(this.formulario.value);
    }
  }

}
