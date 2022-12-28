import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Login from './signup'
import UserContext from '../components/context/UserContext'
import Signup from './signup'
import NavBar from '../components/NavBar/NavBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <UserContext>
      <div>
        <NavBar />

      </div>
    </UserContext>

  )
}
