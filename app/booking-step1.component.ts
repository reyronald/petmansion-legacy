import {Component, Input, OnInit} from '@angular/core';
import {Gender, BookingRequest} from './BookingRequest';

@Component({
    selector: 'my-booking-step1',
    templateUrl: '/app/booking-step1.html'
})
export class BookingStep1Component implements OnInit {
  public Gender = Gender;

  @Input()
  request : BookingRequest;

  constructor() {
  }

  ngOnInit() {
  	// this.request = new BookingRequest();
  }
}
