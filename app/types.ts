export type Driver = {
  name: string
  constructor: string
}

export type DriversList = Record<string, Driver>

export type GameData = {
  guess: string
  wasCorrect: boolean
  currentYear: string
  correctAnswers: DriversList
  lives: number
}
