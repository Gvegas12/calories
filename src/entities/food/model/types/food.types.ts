import { Eating } from "@/entities/eating";

export interface Food {
	id: number;
	name: string;
	calories: number;
	protein: number;
	carbohydrate: number;
	fats: number;
	eating: Eating;
}
