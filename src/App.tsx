import React, { useState } from 'react'
import { getTrivia } from './api'
import { Card } from './Card'
import { StartPage } from './StartPage'
import { TriviaPage } from './TriviaPage'
import { shuffleOptions, unescapeText } from './util'

interface State {
  category: string
  question: string
  options: string[]
  correctIndex: number
}

export const App = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [state, setState] = useState<State>({
    category: '',
    question: '',
    options: [],
    correctIndex: -1
  })
  const [isCorrect, setIsCorrect] = useState(-1)

  const handleGetTrivia = async () => {
    setIsLoading(true)
    const data = await getTrivia()
    const { options, correctIndex } = shuffleOptions(data.correct_answer, data.incorrect_answers)

    setState({
      category: unescapeText(data.category),
      question: unescapeText(data.question),
      options: options.map((option) => unescapeText(option)),
      correctIndex
    })
    setIsCorrect(-1)
    setIsLoading(false)
  }

  const handleClickOption = (choice: number) => {
    choice === state.correctIndex ? setIsCorrect(1) : setIsCorrect(0)
  }

  return (
    <Card>
      {state.correctIndex === -1
        ? <StartPage isLoading={isLoading} getTrivia={handleGetTrivia} />
        : <TriviaPage
            category={state.category}
            question={state.question}
            options={state.options}
            correctIndex={state.correctIndex}
            isCorrect={isCorrect}
            isLoading={isLoading}
            onClickOption={handleClickOption}
            getTrivia={handleGetTrivia}
          />
      }
    </Card>
  )
}
