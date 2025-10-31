import fn from './solution'

describe('Challenge 04: implement binary search to find a target phone number', () => {
	it('Test 01', () => {
		const phones = [1001, 1002, 1005, 1008, 1010, 1015, 1020]
		const result = fn(phones, 1008)
		const expected = 3
		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const phones = [1001, 1002, 1005, 1008, 1010, 1015, 1020]
		const result = fn(phones, 1001)
		const expected = 0
		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const phones = [1001, 1002, 1005, 1008, 1010, 1015, 1020]
		const result = fn(phones, 1020)
		const expected = 6
		expect(result).toBe(expected)
	})

	it('Test 04', () => {
		const phones = [1001, 1002, 1005, 1008, 1010, 1015, 1020]
		const result = fn(phones, 9999)
		const expected = -1
		expect(result).toBe(expected)
	})
})
