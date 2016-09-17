// http://stackoverflow.com/questions/38242425/exchange-data-between-multi-step-forms-in-angular2-what-is-the-proven-way
// http://stackoverflow.com/questions/36835123/how-do-i-pass-data-in-angular-2-components-while-using-routing
// https://www.reddit.com/r/Angular2/comments/413528/multistep_forms_with_angular2/
//https://angular.io/docs/ts/latest/cookbook/component-communication.html#!#parent-to-child
import {EnumUtils} from './enum-utils';

export abstract class Wizard<T> { // where T is an enum of the Wizard's steps
  public currentStep: T;

  constructor(private _stepsUtils: EnumUtils) {
    this.currentStep = <T><any>this._stepsUtils.getFirstElement();
  }

  public onPrevious(): void {
    if (this.isFirstStep()) {
      return;
    }
    this.currentStep = <T><any>this._stepsUtils.getPreviousElement(<number><any>this.currentStep);
  }

  public onNext(): void {
    if (this.isLastStep()) {
      return;
    }
    this.currentStep = <T><any>this._stepsUtils.getNextElement(<number><any>this.currentStep);
  }

  public isFirstStep(): boolean {
    return <T><any>this._stepsUtils.getFirstElement() === this.currentStep;
  }

  public isLastStep(): boolean {
    return <T><any>this._stepsUtils.getLastElement() === this.currentStep;
  }
}
