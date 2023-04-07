import Link from 'next/link'
import {
	ApplePodcastIcon,
	SpotifyIcon,
	OvercastIcon,
	PersonIcon,
	RSSIcon,
} from '@/components/Icons'

const LandingPage = () => {
	return (
		<>
			<div className='  bg-slate-950'>
				<header className='flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm'>
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
							<div className='md:hidden flex gap-x-5'>
								<Link
									className='font-medium text-blue-600 md:py-6 dark:text-blue-500'
									href='#'
									aria-current='page'>
									Episodes
								</Link>

								<Link
									className='font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500'
									href='#'>
									LiveStream
								</Link>
							</div>
						</div>
						<div className='hidden overflow-hidden transition-all duration-300 basis-full grow md:block'>
							<div className='flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:pl-7'>
								<Link
									className='font-medium text-blue-600 md:py-6 dark:text-blue-500'
									href='#'
									aria-current='page'>
									Episodes
								</Link>

								<Link
									className='font-medium text-gray-500 hover:text-gray-400 md:py-6 dark:text-gray-400 dark:hover:text-gray-500'
									href='#'>
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
								className='inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 pl-3 rounded-full transition hover:border-gray-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-200'
								href='#'>
								Live Stream - Coming Soon
								<span className='py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-gray-200 font-semibold text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-400'>
									<svg
										className='w-2.5 h-2.5'
										width='16'
										height='16'
										viewBox='0 0 16 16'
										fill='none'>
										<path
											d='M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14'
											stroke='currentColor'
											stroke-width='2'
											stroke-linecap='round'
										/>
									</svg>
								</span>
							</Link>
						</div>

						<div className='mt-5 max-w-2xl text-center mx-auto'>
							<h1 className='block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl dark:text-gray-200'>
								{"Let's Build Our Mind "}
								<span className='bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent'>
									Together
								</span>
							</h1>
						</div>

						<div className='mt-5 max-w-3xl text-center mx-auto'>
							<p className='text-lg text-gray-600 dark:text-gray-400'>
								Explore the world of podcasts with us - where every story has a
								voice.
							</p>
						</div>

						<div className='mt-8 grid gap-3 w-full sm:inline-flex sm:justify-center'>
							<Link
								className='inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-4 dark:focus:ring-offset-gray-800'
								href='#'>
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
										stroke-width='2'
										stroke-linecap='round'
									/>
								</svg>
							</Link>
						</div>
					</div>
				</div>
				<hr className='w-48 h-1 mx-auto  bg-gray-100 border-0 rounded  dark:bg-gray-700' />
			</div>

			<section className=' dark:bg-slate-950 dark:text-gray-100'>
				<div className='container mx-auto space-y-1 text-center pb-4'>
					<h2 className='pb-3 text-3xl font-bold md:text-4xl pt-10 '>
						Latest Episodes
					</h2>
					<p>Get the latest episodes every friday at 3 pm</p>
				</div>
				<div className=' grid grid-cols-2 justify-center items-center shadow-inner shadow-gray-800 p-10 ml-3 mb-1 mr-3'>
					<div className='flex flex-col px-10 py-6 '>
						<h2 className='mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-100'>
							HyperFocus
						</h2>
						<p className='flex-1 mb-4 text-base leading-relaxed dark:text-gray-400'>
							Hyperfocus on our conscious mind
						</p>
						<a
							className='inline-flex items-center space-x-2 text-sm dark:text-violet-400'
							href='/components'>
							<span>Listen Now</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='currentColor'
								className='w-4 h-4'>
								<path
									fillRule='evenodd'
									d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
									clipRule='evenodd'></path>
							</svg>
						</a>
					</div>
					<div className='flex flex-col px-10 py-6 '>
						<h2 className='mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-100'>
							HyperFocus
						</h2>
						<p className='flex-1 mb-4 text-base leading-relaxed dark:text-gray-400'>
							Hyperfocus on our conscious mind
						</p>
						<a
							className='inline-flex items-center space-x-2 text-sm dark:text-violet-400'
							href='/components'>
							<span>Listen Now</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='currentColor'
								className='w-4 h-4'>
								<path
									fillRule='evenodd'
									d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
									clipRule='evenodd'></path>
							</svg>
						</a>
					</div>
					<div className='flex flex-col px-10 py-6 '>
						<h2 className='mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-100'>
							HyperFocus
						</h2>
						<p className='flex-1 mb-4 text-base leading-relaxed dark:text-gray-400'>
							Hyperfocus on our conscious mind
						</p>
						<a
							className='inline-flex items-center space-x-2 text-sm dark:text-violet-400'
							href='/components'>
							<span>Listen Now</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='currentColor'
								className='w-4 h-4'>
								<path
									fillRule='evenodd'
									d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
									clipRule='evenodd'></path>
							</svg>
						</a>
					</div>
					<div className='flex flex-col px-10 py-6 '>
						<h2 className='mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-100'>
							HyperFocus
						</h2>
						<p className='flex-1 mb-4 text-base leading-relaxed dark:text-gray-400'>
							Hyperfocus on our conscious mind
						</p>
						<a
							className='inline-flex items-center space-x-2 text-sm dark:text-violet-400'
							href='/components'>
							<span>Listen Now</span>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 20 20'
								fill='currentColor'
								className='w-4 h-4'>
								<path
									fillRule='evenodd'
									d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
									clipRule='evenodd'></path>
							</svg>
						</a>
					</div>
				</div>
				<section className='p-10 dark:bg-slate-950 dark:text-gray-100 '>
					<hr className='w-48 h-1 mx-auto  bg-gray-100 border-0 rounded  dark:bg-gray-700' />
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
