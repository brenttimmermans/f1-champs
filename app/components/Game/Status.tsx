export default function Status({
  wasCorrect,
  isGameOver,
  hasGameEnded,
}: {
  wasCorrect: boolean | undefined
  isGameOver: boolean | undefined
  hasGameEnded: boolean | undefined
}) {
  let text = 'Go and guess something!'

  if (wasCorrect) {
    text = '✅ Correct! On to the next one!'
  }

  if (wasCorrect === false) {
    text = "❌ That's not the one"
  }

  if (isGameOver) {
    text = "🏁 Game over, you'll do better next time 🏁"
  }

  if (hasGameEnded) {
    text = '🏁 Chequered flag, P1 🏁'
  }

  return <p className="status">{text}</p>
}
