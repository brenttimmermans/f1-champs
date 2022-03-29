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
    <ul className="flex flex-col-reverse grow overflow-y-auto border-t-2 border-slate-200">
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
    <li className="flex justify-between items-center border border-slate-200 px-2 py-2 mb-1 shadow shadow-slate-200/50">
      <span className="text-slate-500 w-20 text-left text-xs">{year}</span>
      <span className="grow">{name}</span>
      <span className="text-slate-500 w-20 text-right text-xs">{team}</span>
    </li>
  )
}
