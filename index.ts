import { NgModule, ModuleWithProviders } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
  ],
  exports: [
    FormsModule,
    CommonModule,
  ],
  declarations: [],
})
export class ExoCoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ExoCoreModule,
      providers: [ ],
    };
  }
}
