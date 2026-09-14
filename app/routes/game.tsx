import { Link } from 'react-router'
import { useRef } from 'react'

import { getAllDrivers } from '~/lib/data'
import { useGame } from '~/hooks/useGame'
import CorrectAnswers from '~/components/Game/CorrectAnswers'
import Lives from '~/components/Game/Lives'
import Status from '~/components/Game/Status'

const DRIVER_OPTIONS = getAllDrivers()

export default function Game() {
  const {
    currentYear,
    lives,
    isFinished,
    hasGameEnded,
    answers,
    state,
    guess,
    reset,
  } = useGame()

  const inputRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  const formReset = () => {
    formRef.current?.reset()
    inputRef.current?.focus()
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!inputRef.current) return

    guess(inputRef.current.value)
    formReset()
  }

  const handleReset = () => {
    reset()
    formReset()
  }

  return (
    <>
      <div className="close">
        <Link className="block px-8 py-5" to="/">
          &times;
        </Link>
      </div>
      <div className="flex flex-col grow space-y-6 ">
        <CorrectAnswers
          answers={answers}
          currentYear={String(currentYear)}
          hasGameEnded={hasGameEnded}
        />
        <div className="controls">
          <Lives lives={lives} />
          <Status state={state} />
          <form
            method="post"
            ref={formRef}
            onSubmit={handleSubmit}
            className="space-y-3"
          >
            <p className="text-left">
              <label htmlFor="guess" className="label">
                Your guess:
              </label>
              <input
                type="text"
                name="guess"
                id="guess"
                list="guess-options"
                disabled={isFinished}
                placeholder="Enter a driver's name"
                autoFocus
                required
                ref={inputRef}
                className="input"
              />
              <datalist id="guess-options">
                {DRIVER_OPTIONS.map(driver => (
                  <option key={driver} value={driver} />
                ))}
              </datalist>
            </p>
            <p>
              <button
                className="button px-20"
                type="submit"
                disabled={isFinished}
              >
                Guess
              </button>
            </p>
            <p className="link">
              <button type="button" onClick={handleReset}>
                Reset
              </button>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
