export default function translatePossessed(message: string): string {
	const _message: string = message.replace(/^ +$/, '')

	const words: string[] = []
	const reversedWords: string[] = _message.split(' ')

	for (const reversedWord of reversedWords) {
		const word: string = reversedWord.split('').reverse().join('')
		words.push(word)
	}

	const normalizedMessage = words.join(' ')

	return normalizedMessage
}
