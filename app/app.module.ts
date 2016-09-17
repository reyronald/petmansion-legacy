import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import {AppComponent}     from './app.component';
import {HomeComponent}    from './home.component';
import {AboutComponent}   from './about.component';
import {ServicesComponent}   from './services.component';
import {BookingComponent} from './booking.component';
import {ContactComponent} from './contact.component';

import {BookingStep1Component} from './booking-step1.component';
import {BookingStep2Component} from './booking-step2.component';

import {DatepickerDirective} from './datepicker.directive';

import {DominicanCurrencyPipe} from './dominican-currency.pipe';

import {routing} from './app.routes';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		routing
	],
	declarations: [
		AppComponent,
		HomeComponent,
		AboutComponent,
		ServicesComponent,
		BookingComponent,
		BookingStep1Component,
		BookingStep2Component,
		ContactComponent,
		DatepickerDirective,
		DominicanCurrencyPipe
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
