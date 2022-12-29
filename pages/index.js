import { Inter } from '@next/font/google'
import NavBar from '../components/NavBar/NavBar'
import Hero from '../components/Hero/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-black'>
      <NavBar />

      <div className='min-h-screen'>
        <Hero />
      </div>
    </div>

  )

}
