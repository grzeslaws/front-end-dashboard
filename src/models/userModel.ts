import { ArrayField, Field } from "sparkson";
import { Address } from "./addressModel";

export class User {
	constructor(
		@Field("id") public id: number,
		@Field("name") public name: string,
		@Field("username") public username: string,
		@Field("email") public email: string,
		@ArrayField("address", Address) public address: Address
	) {}
}
