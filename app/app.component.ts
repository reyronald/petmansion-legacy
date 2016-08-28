import { Component, OnInit } from '@angular/core';
import {Gender, BookingRequest} from './BookingRequest';

declare var $ : JQueryStatic;

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.html'
})
export class AppComponent implements OnInit { 
	public Gender = Gender;
	public request : BookingRequest;

	constructor() {
	}

	ngOnInit() {
		this.request = new BookingRequest();
	}
}