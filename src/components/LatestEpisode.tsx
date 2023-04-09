import Link from 'next/link'
import { LatestEpisodeProps } from './LandingPage'

const LatestEpisode = ({
	latestEpisode,
}: {
	latestEpisode: LatestEpisodeProps
}) => {
	return (
		<>
			<div className='flex flex-col px-10 py-6 '>
				<h2 className='mb-2 text-lg font-semibold sm:text-xl title-font dark:text-gray-100'>
					<span className='font-bold text-orange-700'>&rarr;</span>{' '}
					{latestEpisode.title}
				</h2>
				<p className='flex-1 mb-4 text-base leading-relaxed dark:text-gray-400'>
					{latestEpisode.description}
				</p>
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
		</>
	)
}

export default LatestEpisode
