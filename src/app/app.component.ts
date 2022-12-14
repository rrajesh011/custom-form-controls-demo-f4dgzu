import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Based on Kara Erickson's presentation: https://www.youtube.com/watch?v=CD_t3m2WMM8
 * You can also check my Medium article on custom form controls and nested form groups:
 * https://javascript.plainenglish.io/angular-custom-form-controls-nested-form-groups-made-easy-2ac09e91cf67
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nickname: ['', Validators.required],
      personal: [''],
    });
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}
