import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalComponent } from './personal/personal.component';

@NgModule({
  declarations: [PersonalComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    PersonalComponent,
  ],
})
export class SharedModule {}
