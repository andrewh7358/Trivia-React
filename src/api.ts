interface TriviaResponse {
  category: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

const trivia: TriviaResponse[] = []
const url = 'https://opentdb.com/api.php?amount=5&type=multiple'

export const getTrivia = async () => {
  if (trivia.length) {
    return trivia.pop()!
  }
  
  let res = await fetch(url)
  let data = await res.json() as { response_code: number, results: TriviaResponse[] }

  while (data.response_code !== 0 && !data.results.length) {
    await new Promise(resolve => setTimeout(resolve, 2000))
    res = await fetch(url)
    data = await res.json() as { response_code: number, results: TriviaResponse[] }
  }

  trivia.push(...data.results)

  return trivia.pop()!
}
