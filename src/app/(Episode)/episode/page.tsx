import { Container } from '@/components/Container'
import EpisodeItem from '@/components/EpisodeItem'
import React, { Fragment } from 'react'
import { parse } from 'rss-to-json'

async function getEpisodes() {
	let feed = await parse('https://their-side-feed.vercel.app/api/feed')
	return feed.items
}

const page = async () => {
	const episodes = await getEpisodes()
	return (
		<div className='pt-16 pb-12 sm:pb-4 lg:pt-12'>
			<Container>
				<h1 className='text-2xl font-bold leading-7 text-slate-900'>
					Episodes
				</h1>
			</Container>
			<div className='divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-100'>
				{episodes.map((episode) => (
					<EpisodeItem key={episode.id} episode={episode} />
				))}
			</div>
		</div>
	)
}

export default page
