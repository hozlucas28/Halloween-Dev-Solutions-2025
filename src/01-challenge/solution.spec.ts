import fn from './solution'

describe('Challenge 01: reverse the words of the message', () => {
	it('Test 01', () => {
		const message = 'i yojne gnihctaw uoy'
		const result = fn(message)
		const expected = 'i enjoy watching you'
		expect(result).toEqual(expected)
	})

	it('Test 02', () => {
		const message = 'siht si gnorw'
		const result = fn(message)
		const expected = 'this is wrong'
		expect(result).toEqual(expected)
	})

	it('Test 03', () => {
		const message = '      '
		const result = fn(message)
		const expected = ''
		expect(result).toEqual(expected)
	})

	it('Test 04', () => {
		const message = 'dooG secitcarP'
		const result = fn(message)
		const expected = 'Good Practices'
		expect(result).toEqual(expected)
	})
})
