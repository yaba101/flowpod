import Link from 'next/link'
import { ApplePodcastIcon, SpotifyIcon, OvercastIcon } from '@/components/Icons'
import { client } from '@/lib/contentful/client'
import LatestEpisode from './LatestEpisode'

export type LatestEpisodeProps = {
	id: string
	title: string
	slug: string
	description: string
}
type LatestEpisodeItemProps = {
	fields: {
		title: string
		slug: string
		description: string
	}
}

async function getLatestEpisodes(): Promise<LatestEpisodeProps[]> {
	const response = await client.getEntries({ content_type: 'latestEpisodes' })
	const episodes: LatestEpisodeProps[] = await response.items.map(
		(item: LatestEpisodeItemProps) => {
			return {
				id: item.fields.slug,
				title: item.fields.title,
				slug: item.fields.slug,
				description: item.fields.description,
			}
		}
	)
	return episodes
}

const LandingPage = async () => {
	const latestEpisodes = await getLatestEpisodes()
	return (
		<>
			<div className=' bg-slate-950'>
				<header className='z-50 flex flex-wrap w-full text-sm md:justify-start md:flex-nowrap'>
					<nav
						className='mt-6 relative max-w-7xl w-full bg-white border border-gray-200 rounded-[36px] mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto dark:bg-gray-800 dark:border-gray-700'
						aria-label='Global'>
						<div className='flex items-center justify-between'>
							<Link
								className='flex-none text-xl font-extrabold dark:text-white'
								href='#'
								aria-label='Brand'>
								FlowPod
							</Link>
							<div className='flex md:hidden gap-x-5'>
								<Link
									className='font-medium text-blue-600 md:py-6 dark:text-blue-500'
									href='/episodes'
									aria-current='page'>
									Episodes
								</Link>

								<Link
									className='font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500'
									href='/livestream'>
									LiveStream
								</Link>
							</div>
						</div>
						<div className='hidden overflow-hidden transition-all duration-300 basis-full grow md:block'>
							<div className='flex flex-col mt-5 gap-y-4 gap-x-0 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7'>
								<Link
									className='font-medium text-blue-600 md:py-6 dark:text-blue-500'
									href='/episodes'
									aria-current='page'>
									Episodes
								</Link>

								<Link
									className='font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500'
									href='/livestream'>
									LiveStream
								</Link>
							</div>
						</div>
					</nav>
				</header>

				<div className='relative overflow-hidden before:absolute before:top-0 before:left-1/2 before:bg- before:bg-no-repeat before:bg-top before:bg-cover before:w-full before:h-full before:-z-[1] before:transform before:-translate-x-1/2 before:bg-slate-900 dark:before:bg-slate-900 '>
					<div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10'>
						<div className='flex justify-center'>
							<Link
								className='inline-flex items-center p-1 pl-3 text-sm text-gray-800 transition bg-white border border-gray-200 rounded-full gap-x-2 hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200'
								href='#'>
								Live Stream - Coming Soon
								<span className='inline-flex items-center justify-center px-3 py-2 text-sm font-semibold text-gray-600 bg-gray-200 rounded-full gap-x-2 dark:bg-gray-700 dark:text-gray-400'>
									<svg
										className='w-2.5 h-2.5'
										width='16'
										height='16'
										viewBox='0 0 16 16'
										fill='none'>
										<path
											d='M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
										/>
									</svg>
								</span>
							</Link>
						</div>

						<div className='max-w-2xl mx-auto mt-5 text-center'>
							<h1 className='block text-4xl font-bold text-gray-800 md:text-5xl lg:text-6xl dark:text-gray-200'>
								{"Let's Build Our Mind "}
								<span className='text-transparent bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600'>
									Together
								</span>
							</h1>
						</div>

						<div className='max-w-3xl mx-auto mt-5 text-center'>
							<p className='text-lg text-gray-600 dark:text-gray-400'>
								Explore the world of podcasts with us - where every story has a
								voice.
							</p>
						</div>

						<div className='grid w-full gap-3 mt-8 sm:inline-flex sm:justify-center'>
							<Link
								className='inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-center text-white border border-transparent rounded-md gap-x-3 bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800'
								href='/episodes'>
								Start Listening
								<svg
									className='w-3 h-3'
									width='16'
									height='16'
									viewBox='0 0 16 16'
									fill='none'>
									<path
										d='M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
									/>
								</svg>
							</Link>
						</div>
					</div>
				</div>
				<hr className='w-48 h-1 mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700' />
			</div>

			<section className=' dark:bg-slate-950 dark:text-gray-100'>
				<div className='container pb-4 mx-auto space-y-1 text-center'>
					<h2 className='pt-10 pb-3 text-3xl font-bold md:text-4xl '>
						Latest Episodes
					</h2>
					<p>Get the latest episodes every friday at 3 pm</p>
				</div>
				<div className='grid items-center justify-center grid-cols-2 p-10 mb-1 ml-3 mr-3 shadow-inner  shadow-gray-800'>
					{latestEpisodes.map((latestEpisode) => (
						<LatestEpisode
							key={latestEpisode.id}
							latestEpisode={latestEpisode}
						/>
					))}
				</div>
				<section className='p-10 dark:bg-slate-950 dark:text-gray-100 '>
					<hr className='w-48 h-1 mx-auto bg-gray-100 border-0 rounded dark:bg-gray-700' />
					<div className='container p-4 mx-auto text-center'>
						<h2 className='text-4xl font-bold'>You can also listen on</h2>
					</div>
					<div className='container flex flex-wrap justify-center mx-auto dark:text-gray-400'>
						<div className='flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4'>
							<ApplePodcastIcon />
						</div>
						<div className='flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4'>
							<SpotifyIcon />
						</div>
						<div className='flex justify-center w-1/2 p-6 align-middle md:w-1/3 xl:w-1/4'>
							<OvercastIcon />
						</div>
					</div>
				</section>
			</section>
		</>
	)
}

export default LandingPage
