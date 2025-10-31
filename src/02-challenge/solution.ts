export default function countSheep(letters: string): number {
	const counter: Record<string, number> = {
		s: 0,
		h: 0,
		e: 0,
		p: 0,
	}

	for (const letter of letters) {
		if (counter[letter] !== undefined) counter[letter] += 1
	}

	return Math.min(counter['s'], counter['h'], Math.floor(counter['e'] / 2), counter['p'])
}
