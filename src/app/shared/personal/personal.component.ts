import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormGroup,
  Validators,
  Validator,
  AbstractControl,
  ValidationErrors,
  NG_VALUE_ACCESSOR,
  FormBuilder,
  NG_VALIDATORS,
} from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: PersonalComponent,
    },
  ],
})
export class PersonalComponent
  implements OnInit, OnDestroy, ControlValueAccessor
{
  form!: FormGroup;

  genderOptions: string[] = [
    'Female',
    'Male',
    'Non-binary',
    'Gender non-conforming',
    'Prefer not to say',
    'Other',
  ];

  onTouched: () => void = () => {};
  onChange: (value: any) => void = () => {};
  subscriptions: Subscription;

  constructor(private fb: FormBuilder) {
    this.subscriptions = new Subscription();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      gender: ['', Validators.required],
    });
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  writeValue(value: any): void {
    value && this.form.setValue(value, { emitEvent: false });
  }

  registerOnChange(onChange: (value: any) => void): void {
    this.subscriptions.add(this.form.valueChanges.subscribe(onChange));
  }

  registerOnTouched(onTouched: () => void): void {
    this.onTouched = onTouched;
  }

  setDisabledState(disabled: boolean): void {
    disabled ? this.form.disable() : this.form.enable();
  }
}
