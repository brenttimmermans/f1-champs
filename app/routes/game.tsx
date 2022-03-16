import {
  Form,
  json,
  LoaderFunction,
  useActionData,
  useLoaderData,
  Link,
} from 'remix'
import type { ActionFunction } from 'remix'
import invariant from 'tiny-invariant'
import { getAllDrivers, getChampionByYear, getChampionsSince } from '~/lib/data'
import type { DriversList } from '~/types'

type GameData = {
  guess: string
  wasCorrect: boolean
  currentYear: string
  correctAnswers: DriversList
  lives: number
}

const START_YEAR = 2021
const NUMBER_OF_LIVES = 5

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
  const wasCorrect = formData?.wasCorrect
  const lives = formData?.lives ?? NUMBER_OF_LIVES

  const isGameOver = lives === 0

  return (
    <section className="max-w-md text-center container mx-auto">
      {isGameOver && <h2>Game Over</h2>}
      <p>Lives left: {new Array(lives).fill('❤️').join(' ')}</p>
      <p>
        {formData?.guess
          ? `Your last guess: ${formData?.guess}`
          : `Go and guess something!`}
      </p>
      {wasCorrect !== undefined && (
        <p>
          {wasCorrect
            ? '✅ Hooray! That was correct!'
            : "❌ Nope, that's not it."}
        </p>
      )}
      <Form method="post">
        <p>{currentYear}</p>
        <p>
          <label htmlFor="name">Driver name:</label>
          <input
            type="text"
            name="guess"
            id="guess"
            list="guess-options"
            disabled={isGameOver}
            placeholder="Enter a driver name"
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          />
          <datalist id="guess-options">
            {driverOptions.map(driver => (
              <option key={driver} value={driver} />
            ))}
          </datalist>
        </p>
        <input
          type="number"
          name="currentYear"
          value={currentYear}
          readOnly
          style={{ display: 'none' }}
        />
        <input
          type="number"
          name="lives"
          value={lives}
          readOnly
          style={{ display: 'none' }}
        />
        <p>
          <button
            className="bg-red-600 hover:bg-red-500 text-slate-100 px-20 py-2 rounded-full"
            type="submit"
            disabled={isGameOver}
          >
            Guess
          </button>
        </p>
        <p>
          <Link to="/game">Reset</Link>
        </p>
      </Form>
      {Object.keys(correctAnswers).length !== 0 && (
        <CorrectAnswers answers={correctAnswers} />
      )}
    </section>
  )
}

const CorrectAnswers = ({ answers }: { answers: DriversList }) => (
  <ul>
    {Object.entries(answers).map(([year, driver]) => (
      <li key={year}>
        <em>{year}</em> {driver.name}
      </li>
    ))}
  </ul>
)
