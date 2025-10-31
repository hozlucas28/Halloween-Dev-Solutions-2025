export default function surviveRoulette(n: number, k: number): number {
	const victims: number[] = Array.from({ length: n }, (_, index) => index)

	let head = 0
	let kills = 0

	while (kills < n - 1) {
		let offset = (head + k - 1) % victims.length

		victims.splice(offset, 1)
		head = offset % victims.length

		kills++
	}

	return victims[0]
}
