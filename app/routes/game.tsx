import {
  Form,
  json,
  LoaderFunction,
  useActionData,
  useLoaderData,
  Link,
  useTransition,
} from 'remix'
import type { ActionFunction } from 'remix'
import invariant from 'tiny-invariant'
import { useEffect, useRef } from 'react'

import type { GameData } from '~/types'
import { getAllDrivers, getChampionByYear, getChampionsSince } from '~/lib/data'
import CorrectAnswers from '~/components/Game/CorrectAnswers'
import Lives from '~/components/Game/Lives'
import Status from '~/components/Game/Status'
import { END_YEAR, NUMBER_OF_LIVES, START_YEAR } from '~/config'

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()

  const guess = formData.get('guess')
  const formCurrentYear = formData.get('currentYear')
  const formLives = formData.get('lives')

  invariant(typeof guess === 'string', 'guess should be a string')
  invariant(
    typeof formCurrentYear === 'string',
    'currentYear should be a string',
  )
  invariant(typeof formLives === 'string', 'lives should be a string')

  const currentYear = parseInt(formCurrentYear)
  const lives = parseInt(formLives)

  const correctDriver = await getChampionByYear(currentYear)
  const isCorrect = correctDriver?.name === guess

  const response = { guess, wasCorrect: isCorrect, currentYear, lives }
  if (isCorrect) {
    const newCurrentYear = currentYear - 1
    const correctAnswers = await getChampionsSince(newCurrentYear)
    return json({
      ...response,
      currentYear: newCurrentYear,
      correctAnswers: correctAnswers,
    })
  }

  const correctAnswers = await getChampionsSince(currentYear)
  return json({
    ...response,
    correctAnswers: correctAnswers,
    lives: lives - 1,
  })
}

export const loader: LoaderFunction = async () => {
  return json(await getAllDrivers())
}

export default function Game() {
  const driverOptions = useLoaderData<string[]>()

  const formData = useActionData<GameData>()
  const currentYear = formData?.currentYear ?? START_YEAR.toString()
  const correctAnswers = formData?.correctAnswers ?? {}
  const lives = formData?.lives ?? NUMBER_OF_LIVES

  const wasCorrect = formData?.wasCorrect
  const isGameOver = lives === 0
  const hasGameEnded = parseInt(currentYear) < END_YEAR
  const disabeInputs = isGameOver || hasGameEnded

  const transition = useTransition()
  const isSubmitting = transition.state === 'submitting'

  const inputRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (!isSubmitting) {
      inputRef.current?.focus()
      formRef.current?.reset()
    }
  }, [isSubmitting])

  return (
    <>
      <div className="close">
        <Link className="block px-8 py-5" to="/">
          &times;
        </Link>
      </div>
      <div className="flex flex-col grow space-y-6 ">
        <CorrectAnswers
          answers={correctAnswers}
          currentYear={currentYear}
          hasGameEnded={hasGameEnded}
        />
        <div className="controls">
          <Lives lives={lives} />
          <Status
            wasCorrect={wasCorrect}
            isGameOver={isGameOver}
            hasGameEnded={hasGameEnded}
          />
          <Form method="post" ref={formRef} className="space-y-3">
            <p className="text-left">
              <label htmlFor="guess" className="label">
                Your guess:
              </label>
              <input
                type="text"
                name="guess"
                id="guess"
                list="guess-options"
                disabled={disabeInputs}
                placeholder="Enter a driver's name"
                autoFocus
                required
                ref={inputRef}
                className="input"
              />
              <datalist id="guess-options">
                {driverOptions.map(driver => (
                  <option key={driver} value={driver} />
                ))}
              </datalist>
            </p>
            <p className="hidden">
              <input
                type="number"
                name="currentYear"
                value={currentYear}
                readOnly
              />
              <input type="number" name="lives" value={lives} readOnly />
            </p>
            <p>
              <button
                className="button px-20"
                type="submit"
                disabled={disabeInputs}
              >
                Guess
              </button>
            </p>
            <p className="link">
              <Link to="/game">Reset</Link>
            </p>
          </Form>
        </div>
      </div>
    </>
  )
}
