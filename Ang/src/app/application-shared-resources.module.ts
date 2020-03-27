import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VowelPipe } from './Custom/vowel.pipe';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { SelectRequiredValidatorDirective } from './Custom/select-required-validator.directive';

@NgModule({
  declarations: [VowelPipe, SelectRequiredValidatorDirective],
  imports: [
    CommonModule
  ],
  exports: [VowelPipe, SelectRequiredValidatorDirective]
})
export class ApplicationSharedResourcesModule {

  bsGenericDatePickerConfig: Partial<BsDatepickerConfig>;
  constructor() {
    this.bsGenericDatePickerConfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        dateInputFormat: 'DD/MM/YYYY'
      });
  }

}
