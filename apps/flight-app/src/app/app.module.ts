import { FlightCancellingModule } from "./flight-booking/flight-cancelling/flight-cancelling.module";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { FlightLibModule } from "@flight-workspace/flight-lib";
import { PassengerApiModule } from '@flight-workspace/passenger-api';
import { LoggerModule } from '@flight-workspace/logger-lib';

import { AppComponent } from "./app.component";
import { APP_ROUTES } from "./app.routes";
import { BasketComponent } from "./basket/basket.component";
import { FlightBookingModule } from "./flight-booking/flight-booking.module";
import { HomeComponent } from "./home/home.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SharedModule } from "./shared/shared.module";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { CustomLogFormatterService } from './shared/logging/custom-log-formatter.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FlightBookingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FlightCancellingModule,
    LoggerModule.forRoot({
      enableDebug: true,
      // Add this:
      logFormatterType: CustomLogFormatterService
    }),
    FlightLibModule.forRoot(),
    PassengerApiModule.forRoot(),
    SharedModule.forRoot(),
    RouterModule.forRoot(APP_ROUTES, { relativeLinkResolution: 'legacy' }),
  ],
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent,
    BasketComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
