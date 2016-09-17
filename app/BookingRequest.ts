export enum Gender {
	Male,
	Female
}

export enum NexgardWeight {
	A = 4, // lbs
	B = 10, // lbs
	C = 24, // lbs
}

export enum NexgardCost {
	A = 645.00,
	B = 750.00,
	C = 880.00,
	D = 1000.00
}

export class BookingRequest {
	get costPerDay(): number {
		// TODO: Send this to a config or ENV file
		return 375.00;
	}

	public checkInDate : Date;
	public checkOutDate : Date;
	public petName : string;
	public race : string;
	public color : string;
	public weight : number;
	public age : number;
	public gender : Gender;
	public alergies : string;
	public medicalCondition : string;
	public medications : string;
	public sleepPlace : string;
	public mealsADay : number;
	public mealTiming : string;
	public curiosities : string;
	public ownerFullName : string;
	public workplace : string;
	public mobileNumber : string;
	public email : string;
	public nationalId : string;
	public workplacePhoneNumber : string;
	public homePhoneNumber : string;
	public otherPhoneNumber : string;
	public homeAddress : string;
	public handedArticles : string;

	public getDays(): number {
		if (!this.checkInDate || !this.checkOutDate) {
			return 0;
		}

		let secondsDifference: number = this.checkOutDate.getTime() - this.checkInDate.getTime();
		return Math.ceil(secondsDifference/(1000*3600*24));
	}

	public getCost(): number {
		let nexgardCost: NexgardCost;

		if (!this.weight) {
			nexgardCost = 0;
		} else if (this.weight <= <number>NexgardWeight.A) {
			nexgardCost = NexgardCost.A;
		} else if (this.weight <= <number>NexgardWeight.B) {
			nexgardCost = NexgardCost.B;
		} else if (this.weight <= <number>NexgardWeight.C) {
			nexgardCost = NexgardCost.C;
		} else {
			nexgardCost = NexgardCost.D;
		}

		return this.getDays() * this.costPerDay + nexgardCost;
	}
}
