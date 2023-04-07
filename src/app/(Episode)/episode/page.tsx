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
		<div className='pt-16 pb-12 sm:pb-4 lg:pt-12 bg-slate-950 '>
			<Container>
				<h1 className='text-2xl font-bold leading-7 text-gray-200'>Episodes</h1>
			</Container>
			<div className='divide-y divide divide-slate-600 sm:mt-4 lg:mt-8 lg:border-t lg:border-slate-600'>
				{episodes.map((episode) => (
					<EpisodeItem key={episode.id} episode={episode} />
				))}
			</div>
		</div>
	)
}

export default page
