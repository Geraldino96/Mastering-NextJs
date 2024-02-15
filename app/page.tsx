import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/authOptions'
import Image from 'next/image'
import { describe } from 'node:test'

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <main className='relative h-screen'>
      <h1>Hello {session && <span>{session.user!.name}</span>}</h1>
      <Link href="/users" className='btn'>Users</Link>
      <ProductCard></ProductCard>
      {/* <Image 
            src='https://bit.ly/react-cover' 
            alt='imagen' 
            fill
            className='object-cover'
            sizes='(max-width: 480) 100vw, (max-width: 768) 50vw, (max-width: 1200) 33vw'
            quality={100}
            priority
            /> */}
    </main>
  )
}

//NextJs automaticly optimize images
