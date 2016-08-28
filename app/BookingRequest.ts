export enum Gender {
	Male,
	Female
}

export class BookingRequest {
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
}
