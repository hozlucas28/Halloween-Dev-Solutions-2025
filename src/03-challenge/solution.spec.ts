import fn from './solution'

describe('Challenge 03: XXX', () => {
	it('Test 01', () => {
		const result = fn(2025)
		const expected = ['2025-06-13', '2025-10-31']
		expect(result).toStrictEqual(expected)
	})

	it('Test 02', () => {
		const result = fn(2026)
		const expected = ['2026-02-13', '2026-03-13', '2026-10-31', '2026-11-13']
		expect(result).toStrictEqual(expected)
	})

	it('Test 03', () => {
		const result = fn(2024)
		const expected = ['2024-09-13', '2024-10-31', '2024-12-13']
		expect(result).toStrictEqual(expected)
	})
})
