import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { validateCity, validateCityWithParams } from '../../../shared/validators/city-validator';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css'],
})
export class FlightEditComponent implements OnInit {
  editForm: FormGroup = this.getInitialEditForm();
  id = 0;
  showDetails = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.editForm.valueChanges.subscribe(console.log);

    this.route.paramMap.subscribe(
      params => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        this.id = +params.get('id')!;
        this.showDetails = params.get('showDetails') === 'true';

        this.editForm.patchValue({
          id: this.id
        });
      }
    );
  }

  getInitialEditForm(): FormGroup {
    return this.fb.group({
      id: [0],
      from: ['Graz', [
        Validators.required,
        Validators.minLength(3),
        validateCity
      ]],
      to: ['Hamburg', [
        Validators.required,
        Validators.minLength(3),
        validateCityWithParams([
          'Graz', 'Hamburg', 'Rom'
        ])
      ]],
      date: [new Date().toISOString()]
    });
  }

  save(): void {
    console.log('value', this.editForm.value);
    console.log('valid', this.editForm.valid);
    console.log('dirty', this.editForm.dirty);
    console.log('touched', this.editForm.touched);
  }
}
