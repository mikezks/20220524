/* eslint-disable @angular-eslint/directive-selector */
import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: 'input[city]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CityValidatorDirective,
      multi: true
    }
  ]
})
export class CityValidatorDirective implements Validator {

  validate(control: AbstractControl): ValidationErrors | null {
    const validCities: string[] = [
      'Graz', 'Hamburg', 'Berlin'
    ];

    if (control?.value && !validCities.includes(control.value)) {
      return {
        city: {
          validCities,
          actualCity: control.value
        }
      };
    }

    return null;
  }

}
