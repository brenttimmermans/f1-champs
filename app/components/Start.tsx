import { Link } from 'remix'

export default function Index() {
  return (
    <section className="h-full flex justify-center items-center">
      <Link className="button" to="/game">
        Let's get started
      </Link>
    </section>
  )
}
