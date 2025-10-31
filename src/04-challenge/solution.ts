export default function searchPhone(phones: number[], target: number): number {
	let left = 0
	let right = phones.length - 1

	while (left <= right) {
		const middle = left + Math.floor((right - left) / 2)

		const current = phones[middle]
		if (current === target) return middle

		if (current < target) {
			left = middle + 1
		} else {
			right = middle - 1
		}
	}

	return -1
}
