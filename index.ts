import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * STEPPERS
 */

import { ExoStepperComponent } from './src/steppers/steppers.component';
export * from './src/steppers/index';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
  ],
  exports: [
    FormsModule,
    CommonModule,
  ],
  declarations: [ExoStepperComponent],
})
export class ExoCoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ExoCoreModule,
      providers: [ ],
    };
  }
}
