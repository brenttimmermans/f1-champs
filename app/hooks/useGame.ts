import { useState } from 'react'

import { END_YEAR, NUMBER_OF_LIVES, START_YEAR } from '~/config'
import { getChampionByYear, getChampionsSince } from '~/lib/data'
import { determineGameState } from '~/lib/game-state'

export function useGame() {
  const [currentYear, setCurrentYear] = useState(START_YEAR)
  const [lives, setLives] = useState(NUMBER_OF_LIVES)
  const [wasCorrect, setWasCorrect] = useState<boolean>()

  const isGameOver = lives === 0
  const hasGameEnded = currentYear < END_YEAR
  const isFinished = isGameOver || hasGameEnded

  function guess(name: string) {
    if (isFinished) return

    const isCorrect = getChampionByYear(currentYear)?.name === name

    setWasCorrect(isCorrect)

    if (isCorrect) {
      setCurrentYear(currentYear - 1)
    } else {
      setLives(lives - 1)
    }
  }

  function reset() {
    setCurrentYear(START_YEAR)
    setLives(NUMBER_OF_LIVES)
    setWasCorrect(undefined)
  }

  return {
    currentYear,
    lives,
    isFinished,
    hasGameEnded,
    answers: getChampionsSince(currentYear),
    state: determineGameState({ wasCorrect, isGameOver, hasGameEnded }),
    guess,
    reset,
  }
}
