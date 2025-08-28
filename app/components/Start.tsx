import { Link } from 'react-router'

export default function Index() {
  return (
    <section className="h-full flex justify-center items-center">
      <Link className="button" to="/game">
        Let's get started
      </Link>
    </section>
  )
}
