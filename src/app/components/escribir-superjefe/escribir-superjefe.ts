import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-escribir-superjefe',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './escribir-superjefe.html',
})
export class EscribirSuperjefe {
  mensajeGuardado: any = null;
  formulario: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      remitente: ['', [Validators.required, Validators.maxLength(20)]],
      edad: ['', [Validators.required, Validators.max(99)]],
      mensaje: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(14)]],
    });
  }

  guardar() {
    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      return;
    }
    this.mensajeGuardado = this.formulario.value;

    this.formulario.reset();
  }
}
