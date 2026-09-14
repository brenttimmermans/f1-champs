import { GameState } from '~/types'
import type { IGameStateParams } from '~/types'

export function determineGameState(params: IGameStateParams): GameState {
  const { wasCorrect, isGameOver, hasGameEnded } = params

  if (isGameOver) return GameState.GameOver
  if (hasGameEnded) return GameState.GameEnded
  if (wasCorrect) return GameState.CorrectAnswer
  if (wasCorrect === false) return GameState.WrongAnswer
  return GameState.GameStart
}
