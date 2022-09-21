import Link from "next/link"

const Home = () => {
  return (
    <div>
      <p className="text-blue-500 text-lg"><Link href='/tailwindcss/fundamentals'>Tailwind css fundamentals</Link></p>
      <p className="text-blue-500 text-lg"><Link className="text-lg" href='/tailwindcss/fundamentals2'>Tailwind css fundamentals 2</Link></p>
    </div>
  )
}

export default Home