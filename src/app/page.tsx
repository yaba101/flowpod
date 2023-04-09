import { Inter } from 'next/font/google'
import LandingPage from '@/components/LandingPage'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
	/*@ts-expect-error Async Server Component */
	return <LandingPage />
}
