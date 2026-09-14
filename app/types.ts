export type Driver = {
  name: string
  constructor: string
}

export type DriversList = Record<string, Driver>

export interface IGameStateParams {
  wasCorrect: boolean | undefined
  isGameOver: boolean | undefined
  hasGameEnded: boolean | undefined
}

export enum GameState {
  GameStart,
  CorrectAnswer,
  WrongAnswer,
  GameOver,
  GameEnded,
}
