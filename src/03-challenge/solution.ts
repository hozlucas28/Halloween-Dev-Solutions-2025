export default function myersCalendar(year: number): string[] {
	if (typeof year !== 'number' || Number.isNaN(year) || year < 1) return []

	const date = new Date(year, 0, 1)
	const myersAttacks: string[] = []

	for (let month = 0; month < 12; month++) {
		date.setMonth(month, 13)

		if (date.getDay() === 5) myersAttacks.push(`${year}-${`${month + 1}`.padStart(2, '0')}-13`)
		if (month === 9) myersAttacks.push(`${year}-10-31`)
	}

	return myersAttacks
}
