import {Component} from '@angular/core';
import {NexgardCost, NexgardWeight} from './BookingRequest';
import {BookingWizardService} from './booking-wizard.service';
import {Router} from '@angular/router';

@Component({
    selector: 'my-booking-step2',
    templateUrl: '/app/booking-step2.html'
})
export class BookingStep2Component {
  public NexgardWeight = NexgardWeight;
  public NexgardCost = NexgardCost;

  constructor(
    private _router: Router,
  	private _bookingWizardService: BookingWizardService) {
  	if (!this._bookingWizardService.request || !this._bookingWizardService.request.valid) {
  		this.onPrevious();
  	}
  }

  onPrevious() {
    this._router.navigate(['booking/step1']);    
  }
}
