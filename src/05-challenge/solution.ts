export default function changeLock(current: string, target: string): number {
	let movements = 0

	for (let i = 0; i < current.length; i++) {
		const currentValue = Number(current[i])
		const targetValue = Number(target[i])

		const leftDistance = currentValue > targetValue ? currentValue - targetValue : currentValue + 10 - targetValue
		const rightDistance = currentValue > targetValue ? 10 - currentValue + targetValue : targetValue - currentValue

		movements += Math.min(leftDistance, rightDistance)
	}

	return movements
}
