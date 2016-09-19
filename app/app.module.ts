import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {BookingModule} from './booking.module';

import {AppComponent}      from './app.component';
import {HomeComponent}     from './home.component';
import {AboutComponent}    from './about.component';
import {ServicesComponent} from './services.component';
import {ContactComponent}  from './contact.component';

import {routing, appRoutingProviders} from './app.routes';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		routing,
		BookingModule,

	],
	declarations: [
		AppComponent,
		HomeComponent,
		AboutComponent,
		ServicesComponent,
		ContactComponent,
	],
	providers: [
		appRoutingProviders
	],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
