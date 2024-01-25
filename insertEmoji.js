textareaList = document.getElementsByTagName("textarea")
for (let i = 0; i < textareaList.length; i++) {
  textareaList[i].oninput = (e) => {
    const newText = e.target.value.replace(/:pray:$/, "🙏")
    textareaList[i].value = newText
  }
}
