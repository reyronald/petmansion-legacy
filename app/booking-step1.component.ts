import {Component, OnInit, ViewChild, AfterViewChecked} from '@angular/core';
import {Router} from '@angular/router';
import {Gender, BookingRequest} from './BookingRequest';
import {BookingWizardService} from './booking-wizard.service';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'my-booking-step1',
    templateUrl: '/app/booking-step1.html',
    styles: [`
      .ng-valid[required], .ng-valid.required  {
        border-left: 5px solid #42A948; /* green */
      }

      .ng-invalid:not(form)  {
        border-left: 5px solid #a94442; /* red */
      }
    `]
})
export class BookingStep1Component implements OnInit, AfterViewChecked {
  @ViewChild('form') form: NgForm;

  public Gender = Gender;

  constructor(
    private _router: Router,
    private _bookingWizardService: BookingWizardService
    ) {
  } 

  ngOnInit() {
    if (!this._bookingWizardService.request) {
  	  this._bookingWizardService.request = new BookingRequest();  
    }
  }

  get req() {
    return this._bookingWizardService.request;
  }

  ngAfterViewChecked() {
    // if (this.form) {
    //   this.form.valueChanges.subscribe(data => {
    //     this._bookingWizardService.request.valid = this.form.form.valid;
    //   });
    // }
  }

  onSubmit() {
    this._bookingWizardService.request.valid = true;
    this._router.navigate(['/booking/step2']);   
  }
}
