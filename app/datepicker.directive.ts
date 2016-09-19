// https://vaadin.com/elements/-/element/vaadin-date-picker
// http://stackoverflow.com/questions/34827334/triggering-angular2-change-detection-manually

import { 
	Directive, 
	ElementRef, 
	AfterViewInit, 
	Input, 
	OnDestroy
} from '@angular/core';
import {FormControlName, NgControl} from '@angular/forms';

declare var $ : JQueryStatic;

@Directive({ 
	selector: '[datepicker]',
})
export class DatepickerDirective implements AfterViewInit, OnDestroy {
	@Input('datepicker') control : FormControlName;

	private _el : JQuery;

    constructor(private el: ElementRef) {
    	this._el = $(el.nativeElement);
    }

    ngAfterViewInit() {
		this._el.datepicker(<JQueryUI.DatepickerOptions | DatepickerOptions>{
			minDate: '+1m',
    		startDate: "+1m"
		});

		var fnKeyUp = () => {
			let value = this._el.val();
			if (this.control.model != value) {
				this.control.viewToModelUpdate(value);
				// this.control.viewToModelUpdate(new Date(value));
			}

			if (!!value) {
				this._el.removeClass('ng-invalid');
				this._el.addClass('ng-valid');
			} else {
				this._el.removeClass('ng-valid');
				this._el.addClass('ng-invalid');
			}
		};

		this._el.on("change", fnKeyUp.bind(this));
    }

    ngOnDestroy() {
    	this._el.off("change");
    }
}