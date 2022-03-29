import { Link } from 'remix'

export default function Index() {
  return (
    <section className="h-full flex justify-center items-center">
      <Link
        className="bg-red-500 shadow shadow-red-500/50 hover:bg-red-400 text-slate-100 px-10 py-2 rounded disabled:opacity-75"
        to="/game"
      >
        Let's get started
      </Link>
    </section>
  )
}
