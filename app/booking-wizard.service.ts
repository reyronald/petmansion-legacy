import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import {BookingRequest} from './BookingRequest';

@Injectable()
export class BookingWizardService {
	public request: BookingRequest;
}