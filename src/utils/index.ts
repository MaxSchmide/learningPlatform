export function toHoursAndMinutes(totalMinutes: number) {
	const hours = Math.floor(totalMinutes / 60)
	const minutes = totalMinutes % 60

	return `${hours > 0 ? `${hours} hr ${minutes} min` : `${minutes} min`}`
}
