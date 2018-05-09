import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvaildTypeDirective } from './directives/invaild-type.directive';
import { InvalidMessageDirective } from './directives/invalid-message.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InvaildTypeDirective, InvalidMessageDirective],
  exports: [InvaildTypeDirective, InvalidMessageDirective]
})
export class FormValidationModule { }
