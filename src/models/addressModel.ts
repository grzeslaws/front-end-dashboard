import { Field } from "sparkson";

export class Address {
	constructor(@Field("city") public city: string) {}
}
