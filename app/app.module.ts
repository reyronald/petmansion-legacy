import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import {AppComponent}     from './app.component';
import {BookingComponent} from './booking.component';
import {AboutComponent}   from './about.component';

import {DatepickerDirective} from './datepicker.directive';

import {routing} from './app.routes';

@NgModule({
	imports: [ 
		BrowserModule, 
		FormsModule, 
		routing 
	],
	declarations: [ 
		AppComponent, 
		BookingComponent,
		AboutComponent,
		DatepickerDirective 
	],
	bootstrap: [ 
		AppComponent 
	]
})
export class AppModule { }