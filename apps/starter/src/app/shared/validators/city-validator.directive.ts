/* eslint-disable @angular-eslint/directive-selector */
import { Directive, Input } from '@angular/core';
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
  @Input() city: string[] | string | undefined;

  validate(control: AbstractControl): ValidationErrors | null {
    const validCities = !this.city ? [
      'Graz', 'Hamburg', 'Berlin'
    ] : this.city;

    if (control?.value && validCities && !validCities.includes(control.value)) {
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
