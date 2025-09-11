export const unescapeText = (text: string) => {
  const textarea = document.createElement('textarea')
  textarea.innerHTML = text
  return textarea.value
}

export const shuffleOptions = (answer1: string, answer2: string[]) => {
  const options = [answer1].concat(answer2)

  for (let i = options.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [options[i], options[j]] = [options[j], options[i]]
  }

  return { options, correctIndex: options.findIndex((option) => option === answer1) }
}
