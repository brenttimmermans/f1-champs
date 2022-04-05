import { GameState } from '~/types'

export default function Status({ state }: { state: GameState }) {
  const text = getStatusText(state)
  return <p className="status">{text}</p>
}

function getStatusText(state: GameState): string {
  switch (state) {
    case GameState.GameStart:
      return 'Go and guess something!'
    case GameState.CorrectAnswer:
      return '✅ Correct! On to the next one!'
    case GameState.WrongAnswer:
      return "❌ That's not the one"
    case GameState.GameOver:
      return "🏁 Game over, you'll do better next time 🏁"
    case GameState.GameEnded:
      return '🏁 Chequered flag, P1 🏁'
    default:
      return '---'
  }
}
