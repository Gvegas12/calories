import { Eating } from "@/entities/eating";

export interface User {
	id: number;
	firstName: string;
	// lastName: string;
	email: string;
	// weightGoal: number;
	// weightCurrent: number;
	// height: number;
	eatings: Eating[];
	createdAt?: Date;
	updatedAt?: Date;
}
