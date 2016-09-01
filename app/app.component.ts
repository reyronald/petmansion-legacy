import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: '/app/app.html'
})
export class AppComponent {
	public getYear() : number {
		return new Date().getFullYear();
	}
}