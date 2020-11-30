import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
})
export class PassengerApiModule {
  static forRoot(): ModuleWithProviders<PassengerApiModule> {
    return {
      ngModule: PassengerApiModule,
      providers: []
    }
  }
}
