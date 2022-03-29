import { NUMBER_OF_LIVES } from '~/config'

export default function Lives({ lives }: { lives: number }) {
  return (
    <section className="flex justify-end items text-left text-sm text-slate-500">
      <div>
        <p>Lives left</p>
        <p>
          {new Array(NUMBER_OF_LIVES)
            .fill('❤️', 0, lives)
            .fill('🖤', lives, NUMBER_OF_LIVES)
            .join(' ')}
        </p>
      </div>
    </section>
  )
}
