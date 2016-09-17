import {Component, OnInit} from '@angular/core';
import {EnumUtils} from './enum-utils';
import {Wizard} from './wizard';
import {Gender, BookingRequest} from './BookingRequest';

enum BookingWizardStep {
  StepOne,
  StepTwo
}

@Component({
    templateUrl: '/app/booking.html'
})
export class BookingComponent extends Wizard<BookingWizardStep> {
  public BookingWizardStep = BookingWizardStep;

  public request : BookingRequest = new BookingRequest();

  constructor() {
    super(new EnumUtils(BookingWizardStep));
  }
}
