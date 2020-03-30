import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VowelPipe } from './Custom/vowel.pipe';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { SelectRequiredValidatorDirective } from './Custom/select-required-validator.directive';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [VowelPipe, SelectRequiredValidatorDirective],
  imports: [
    CommonModule
  ],
  // must export all the shared ones for other modules to resuse.
  exports: [VowelPipe, SelectRequiredValidatorDirective,
    CommonModule, FormsModule
  ],
  providers: []
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
