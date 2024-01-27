/**
 * Принимает строку в формате 2020-05-29T00:00:00Z
 * и возвращает строку в формате dd.MM.yyyy
 * @param dateString 2020-05-29T00:00:00Z
 * @returns dd.MM.yyyy
 */
export function formatDate(dateString: string) {
	// Разбиваем строку на год, месяц и день
	const [year, month, day] = dateString.substring(0, 10).split("-");

	// Возвращаем новую дату
	return `${day}.${month}.${year}`;
}
