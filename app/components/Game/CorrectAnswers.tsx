import type { DriversList } from '~/types'

export default function CorrectAnswers({
  answers,
  currentYear,
  hasGameEnded,
}: {
  answers: DriversList
  currentYear: string
  hasGameEnded: boolean
}) {
  return (
    <ul className="answers">
      {!hasGameEnded && (
        <CorrectAnswerItem
          key={currentYear}
          year={currentYear}
          name="???"
          team="---"
        />
      )}
      {Object.entries(answers).map(([year, driver]) => (
        <CorrectAnswerItem
          key={year}
          year={year}
          name={driver.name}
          team={driver.constructor}
        />
      ))}
    </ul>
  )
}

const CorrectAnswerItem = ({
  year,
  name,
  team,
}: {
  year: string
  name: string
  team: string
}) => {
  return (
    <li>
      <span className="subtle text-left">{year}</span>
      <span className="grow">{name}</span>
      <span className="subtle text-right">{team}</span>
    </li>
  )
}
