import React from 'react'

interface TriviaPageProps {
  category: string
  question: string
  options: string[]
  correctIndex: number
  isCorrect: number
  isLoading: boolean
  onClickOption: (choice: number) => void
  getTrivia: () => Promise<void>
}

const optionMap = ['A', 'B', 'C', 'D']

export const TriviaPage = ({ category, question, options, correctIndex, isCorrect, isLoading, onClickOption, getTrivia }: TriviaPageProps) => {
  const attemptMade = isCorrect !== -1
  const optionButtons = options.map((option, index) => 
    <button key={`option${index}`} disabled={attemptMade} onClick={() => onClickOption(index)}>{`${optionMap[index]}. ${option}`}</button>
  )

  let message
  if (isCorrect === 0) {
    message = `Incorrect! The correct answer was ${optionMap[correctIndex]}. ${options[correctIndex]}.`
  } else if (isCorrect === 1) {
    message = 'Correct!'
  }

  return (
    <>
      <div className='text'>{`Category: ${category}`}</div>
      <div className='text'>{`Q: ${question}`}</div>
      <div className='optionsContainer'>
        <div className='optionsRow'>
          {optionButtons.slice(0, 2)}
        </div>
        <div className='optionsRow'>
          {optionButtons.slice(2)}
        </div>
      </div>
      <div className='text'>{message}</div>
      {attemptMade &&
        <div className='flexCenter'>
          <button disabled={isLoading} type='button' onClick={getTrivia}>{!isLoading ? 'Try Again' : 'Loading...'}</button>
        </div>
      }
    </>
  )
}
