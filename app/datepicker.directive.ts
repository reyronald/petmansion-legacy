import { 
	Directive, 
	ElementRef, 
	AfterViewInit, 
	Input, 
	OnDestroy 
} from '@angular/core';
import {NgControlName} from '@angular/common';

declare var $ : JQueryStatic;

@Directive({ 
	selector: '[datepicker]' 
})
export class DatepickerDirective implements AfterViewInit, OnDestroy {
	@Input('datepicker') control : NgControlName;

	private _el : any;

    constructor(private el: ElementRef) {
    	this._el = $(el.nativeElement);
    }

    ngAfterViewInit() {
		this._el.datepicker();

		var fnKeyUp = () => {
			console.log(this._el.val());
			if (this.control.viewModel != this._el.val()) {
				this.control.viewToModelUpdate(new Date(this._el.val()));
			}
		};

		this._el.on("change", fnKeyUp.bind(this));
    }

    ngOnDestroy() {
    	this._el.off("change");
    }
}