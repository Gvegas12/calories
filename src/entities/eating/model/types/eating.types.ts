import { Food } from "@/entities/food";
import { User } from "@/entities/user";

export interface Eating {
	id: number;
	name: string;
	// water: number;
	customCarbohydrate: number;
	customFats: number;
	customProtein: number;
	foods?: Food[] | null;
	user: User;
	createdAt: Date;
	updatedAt: Date;
}
