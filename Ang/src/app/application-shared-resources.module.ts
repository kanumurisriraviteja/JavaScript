import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VowelPipe} from './Custom/vowel.pipe';



@NgModule({
  declarations: [VowelPipe],
  imports: [
    CommonModule
  ],
  exports: [VowelPipe]
})
export class ApplicationSharedResourcesModule { }
