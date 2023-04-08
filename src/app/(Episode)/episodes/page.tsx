import { Container } from '@/components/Container'
import EpisodeItem from '@/components/EpisodeItem'
import React, { Fragment } from 'react'
import { parse } from 'rss-to-json'

async function getEpisodes() {
	let feed = await parse('https://their-side-feed.vercel.app/api/feed')
	let episodes = feed.items.map(
		({ id, title, description, enclosures, published }) => ({
			id,
			title: `${id}: ${title}`,
			published,
			description,
			audio: enclosures.map((enclosure: { url: string; type: string }) => ({
				src: enclosure.url,
				type: enclosure.type,
			}))[0],
		})
	)
	return episodes
}

const page = async () => {
	const episodes = await getEpisodes()
	return (
		<>
			<section className='dark:bg-gray-800 dark:text-gray-100'>
				<div className='container max-w-5xl px-4 py-12 mx-auto'>
					<div className='grid gap-4 mx-4 sm:grid-cols-12'>
						<div className='col-span-12 sm:col-span-3'>
							<div className='text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-violet-400'>
								<h3 className='text-3xl font-semibold'>Episodes</h3>
								{/* <span className='text-sm font-bold tracking-wider uppercase dark:text-gray-400'>
									Vestibulum diam nunc
								</span> */}
							</div>
						</div>
						<div className='relative col-span-12 px-4 space-y-6 sm:col-span-9'>
							{episodes.map((episode) => (
								<EpisodeItem key={episode.id} episode={episode} />
							))}
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export default page
