import {Component, OnInit} from '@angular/core';

import {Gender, BookingRequest} from './BookingRequest';

@Component({
    selector: 'my-booking',
    templateUrl: '/app/booking.html'
})
export class BookingComponent implements OnInit { 
	public Gender = Gender;
	public request : BookingRequest;

	constructor() {
	}

	ngOnInit() {
		this.request = new BookingRequest();
	}
}