export const unescapeText = (text: string) => {
  const textarea = document.createElement('textarea')
  textarea.innerHTML = text
  return textarea.value
}

export const shuffleOptions = (correct_answer: string, incorrect_answers: string[]) => {
  const options = [correct_answer].concat(incorrect_answers)

  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]]
  }

  return { options, correctIndex: options.findIndex((option) => option === correct_answer) }
}
