import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  // Este es con FormControl, porque es una restriccion de un solo campo
  static noSpaceAllowed(formControl: FormControl) {
    return formControl.value?.indexOf(' ') >= 0
      ? { noSpaceAllowed: true }
      : null;
  }

  /*
    checkEquality
    toma dos cadenas como argumentos, que se supone que son los nombres de dos
    controles de formulario en un FormGroup.

    Devuelve una función que toma un AbstractControl (que se supone que es un FormGroup),
    obtiene los valores de los controles de formulario con los nombres proporcionados y
    compara estos valores.
   */
  static checkEquality(source: string, target: string) {
    return (group: AbstractControl): ValidationErrors | null => {
      const sourceValue = group.get(source)?.value;
      const targetValue = group.get(target)?.value;

      return sourceValue === targetValue ? null : { passwordsMismatch: true };
    };
  }
}
