import React from 'react'

interface StartPageProps {
  isLoading: boolean
  getTrivia: () => Promise<void>
}

export const StartPage = ({ isLoading, getTrivia }: StartPageProps) => {
  return (
    <>
      <div className='text'>Trivia Night</div>
      <div className='text'>Click below to get started!</div>
      <div className='flexCenter'>
        <button disabled={isLoading} type='button' onClick={getTrivia}>{!isLoading ? 'Start' : 'Loading...'}</button>
      </div>
    </>
  )
}
