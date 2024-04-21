import { group } from '@angular/animations';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import  { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.scss',
})
export class FormularioComponent {

  private _arbolURL: string = '../../../assets/trees/';
  public arboles: any[] = [
    {
      nombre: 'Irminsul',
      img: this._arbolURL + 'Irminsul.jpg',
    },
    {
      nombre: 'Windrise',
      img: this._arbolURL + 'Windrise tree.jpg',
    },
    {
      nombre: 'Moonlit',
      img: this._arbolURL + 'Moonlit Tree.jpg',
    },
    {
      nombre: 'Sacred Sakura',
      img: this._arbolURL + 'sacred sakura.jpg',
    },
    {
      nombre: 'Xamaran',
      img: this._arbolURL + 'Xamaran.jpg',
    },
    {
      nombre: 'Ashvattha',
      img: this._arbolURL + 'Ashvattha.jpg',
    },
    {
      nombre: 'Gaokerena Lotus',
      img: this._arbolURL + 'Gaokerena Lotus.jpg',
    },
    {
      nombre: 'Tree of Dreams',
      img: this._arbolURL + 'Tree of Dreams.jpg',
    },
    {
      nombre: 'Divine Tree',
      img: this._arbolURL + 'Divine Tree.jpg',
    },
    {
      nombre: 'Harvisptokhm',
      img: this._arbolURL + 'Harvisptokhm.jpg',
    },
  ];

  public restricciones = {
    usuario: {
      required: true,
      minlength: 3,
      maxlength: 17,
      pattern:
        '^(?!.*([bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ][aeiouAEIOU]){2,}).*$',
      // no debe tener la extructura consonste vocal repetida
      //    ^ -> inicio de la cadena
      //    (?! -> negación de la expresión
      //    .* -> cualquier caracter
      //    ( -> inicio de la expresión
      //    [bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ] -> cualquier consonante
      //    [aeiouAEIOU] -> cualquier vocal
      //    ) -> fin de la expresión
      //    {2,} -> 2 o más veces
      //    ) -> fin de la negación
      //    .* -> cualquier caracter
      //    $ -> fin de la cadena
    },
    password: {
      required: true,
      pattern: '.*k.*', // la contraseña debe contener la letra 'k'
      minlength: 4,
      maxlength: 6,
    },
    passwordConfirmation: {
      required: true,
    },
  };

  public formularioGroup = new FormGroup(
    {
      usuario: new FormControl('', [
        Validators.required,
        Validators.minLength(this.restricciones.usuario.minlength),
        Validators.maxLength(this.restricciones.usuario.maxlength),
        Validators.pattern(this.restricciones.usuario.pattern),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(this.restricciones.password.minlength),
        Validators.maxLength(this.restricciones.password.maxlength),
        Validators.pattern(this.restricciones.password.pattern), // la contraseña debe contener la letra 'k'
      ]),
      passwordConfirmation: new FormControl('', [
        Validators.required,
        Validators.minLength(this.restricciones.password.minlength),
        Validators.maxLength(this.restricciones.password.maxlength),
        Validators.pattern(this.restricciones.password.pattern),
      ]),
    },
    {
      validators: CustomValidators.checkEquality('password', 'passwordConfirmation'),
    }
  );

  public formGIArboles = new FormGroup({
    votoArbol: new FormControl('0', [Validators.required]),
  });




  // Metodos




  public enviarFormulario(): void {
    this.formularioGroup.valid
      ? console.log('Formulario válido')
      : console.log('Formulario inválido');

    // cuando se pone la contraseña, entonces el campo de confirmación de contraseña se vuelve requerido
    this.formularioGroup.addControl(
      'passwordConfirmation',
      new FormControl('', [Validators.required])
    );

    /* this.formularioGroup.controls.usuario.valueChanges.subscribe((cambio) => {
      console.log(cambio);
    }); */
  }

  public toggleVisibility(id: string) {
    const elementToChangeVisibility = document.getElementById(
      id
    ) as HTMLInputElement;

    if (elementToChangeVisibility) {
      if (elementToChangeVisibility.type === 'password') {
        elementToChangeVisibility.type = 'text';
      } else {
        elementToChangeVisibility.type = 'password';
      }
    }
  }
}
