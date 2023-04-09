import Link from 'next/link'
import { LatestEpisodeProps } from './LandingPage'

const LatestEpisode = ({
	latestEpisode,
}: {
	latestEpisode: LatestEpisodeProps
}) => {
	return (
		<>
			<div className='grid gap-12 py-4 text-center sm:grid-cols-2 col-span-full md:col-span-4 md:text-left'>
				<div className='flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start'>
					<svg
						className='text-gray-100 ring-white'
						width='34'
						height='34'
						xmlns='http://www.w3.org/2000/svg'
						fillRule='evenodd'
						clipRule='evenodd'
						fill='white'>
						<path d='M7.5 21c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm9 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm-4.5 0c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5.672-1.5 1.5-1.5zm8-12v2c0 4.418-3.582 8-8 8s-8-3.582-8-8v-2h2v2c0 3.309 2.691 6 6 6s6-2.691 6-6v-2h2zm-4 2c0 2.209-1.791 4-4 4s-4-1.791-4-4v-7c0-2.209 1.791-4 4-4s4 1.791 4 4v7z' />
					</svg>
					<h5 className='text-xl font-semibold'>{latestEpisode.title}</h5>
					<p>{latestEpisode.description}</p>
					<Link
						className='inline-flex items-center space-x-2 text-sm dark:text-violet-400'
						href={`episodes/${latestEpisode.slug}`}>
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
					</Link>
				</div>
			</div>
		</>
	)
}

export default LatestEpisode
