import fn from './solution'

describe('Challenge 05: returns the minimum number of moves needed to reach the target combination', () => {
	it('Test 01', () => {
		const result = fn('0022', '0044')
		const expected = 4
		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result = fn('0000', '9999')
		const expected = 4
		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result = fn('1234', '5678')
		const expected = 16
		expect(result).toBe(expected)
	})

	it('Test 04', () => {
		const result = fn('0000', '0000')
		const expected = 0
		expect(result).toBe(expected)
	})

	it('Test 05', () => {
		const result = fn('1357', '2468')
		const expected = 4
		expect(result).toBe(expected)
	})
})
