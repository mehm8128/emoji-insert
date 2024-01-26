function insertEmoji() {
	const emojiMap = {
		pray: "🙏",
		ok_hand: "👌",
	}

	const textareaList = document.getElementsByTagName("textarea")
	for (let i = 0; i < textareaList.length; i++) {
		textareaList[i].oninput = (e) => {
			const newText = Object.entries(emojiMap).reduce((prev, [key, value]) => {
				const regexp = new RegExp(`:${key}:`)
				return prev.replace(regexp, value)
			}, e.target.value)
			textareaList[i].value = newText
		}
	}
}

insertEmoji()
