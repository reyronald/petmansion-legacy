import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';

import {BookingComponent}      from './booking.component';
import {BookingStep1Component} from './booking-step1.component';
import {BookingStep2Component} from './booking-step2.component';

import {DatepickerDirective}   from './datepicker.directive';
import {DominicanCurrencyPipe} from './dominican-currency.pipe';

import {BookingWizardService} from './booking-wizard.service';

import {bookingRouting, appRoutingProviders} from './booking.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    bookingRouting,
  ],
  declarations: [
    BookingComponent,
    BookingStep1Component,
    BookingStep2Component,
  	DatepickerDirective,
  	DominicanCurrencyPipe,
  ],
  providers: [
  	appRoutingProviders,
    BookingWizardService
  ]
})
export class BookingModule {}