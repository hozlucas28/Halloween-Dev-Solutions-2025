import fn from './solution'

describe('Challenge 06: return the last survivor of the roulette', () => {
	it('Test 01', () => {
		const result = fn(4, 2)
		const expected = 0
		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result = fn(5, 3)
		const expected = 3
		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result = fn(6, 2)
		const expected = 4
		expect(result).toBe(expected)
	})

	it('Test 04', () => {
		const result = fn(1, 1)
		const expected = 0
		expect(result).toBe(expected)
	})
})
