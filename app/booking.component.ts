import {Component, OnDestroy} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {BookingWizardService} from './booking-wizard.service';

const stepsRoutes: string[] = [
  '/booking/step1',
  '/booking/step2',
];

@Component({
    template: `
    <router-outlet></router-outlet>
    `,
})
export class BookingComponent implements OnDestroy  {
  private _currentRoute: string = stepsRoutes[0];
  private _subscription: Subscription;

  constructor(
    private _router: Router,
    private _bookingWizardService: BookingWizardService) {
    // this._subscription = this._router.events.subscribe(s => {
    //   if (s instanceof NavigationEnd) {
    //     this._currentRoute =  s.url;       
    //   }
    // });
  }

  ngOnDestroy(): any {
    // this._subscription.unsubscribe();
  }

  // isFirstStep(): boolean {
  //   return stepsRoutes[0] === this._currentRoute;
  // }

  // isLastStep(): boolean {
  //   return stepsRoutes[stepsRoutes.length - 1] === this._currentRoute;
  // }

  // findCurrentIndex() {
  //   let currentIndex = stepsRoutes.indexOf(this._currentRoute);
  //   if (currentIndex === -1) {
  //     throw new Error('Current element of array not found.');
  //   }
  //   return currentIndex;
  // }

  // getPreviousElement(): string {
  //   let currentIndex = this.findCurrentIndex();
  //   if ( currentIndex === 0) {
  //     throw new RangeError('The current element is the first element of the array.');
  //   }
  //   return stepsRoutes[--currentIndex];
  // }

  // getNextElement(): string {
  //   let currentIndex = this.findCurrentIndex();
  //   if ( currentIndex === stepsRoutes.length - 1) {
  //     throw new RangeError('The current element is the last element of the array.');
  //   }
  //   return stepsRoutes[++currentIndex];
  // }

  // onPrevious() {
  //   if (!this.isFirstStep()) {
  //     this._router.navigate([this.getPreviousElement()]);
  //   }
  // }

  // onNext() {
  //   if (!this._bookingWizardService.request.valid) {
  //     alert('not valid form cant go thru');
  //     return;
  //   }

  //   if (!this.isLastStep()) {
  //     this._router.navigate([this.getNextElement()]);
  //   }
  // }
}
