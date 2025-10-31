import fn from './solution'

describe('Challenge 02: count how many words can you form with the letters of the string', () => {
	it('Test 01', () => {
		const result = fn('sheepxsheepy')
		const expected = 2
		expect(result).toBe(expected)
	})

	it('Test 02', () => {
		const result = fn('sshhheeeepppp')
		const expected = 2
		expect(result).toBe(expected)
	})

	it('Test 03', () => {
		const result = fn('hola')
		const expected = 0
		expect(result).toBe(expected)
	})

	it('Test 04', () => {
		const result = fn('peesh')
		const expected = 1
		expect(result).toBe(expected)
	})
})
