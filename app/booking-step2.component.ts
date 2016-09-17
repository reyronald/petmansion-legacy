import {Component, Input} from '@angular/core';
import {Gender, BookingRequest, NexgardCost, NexgardWeight} from './BookingRequest';

@Component({
    selector: 'my-booking-step2',
    templateUrl: '/app/booking-step2.html'
})
export class BookingStep2Component {
  public NexgardWeight = NexgardWeight;
  public NexgardCost = NexgardCost;

  @Input()
  request : BookingRequest;
}
