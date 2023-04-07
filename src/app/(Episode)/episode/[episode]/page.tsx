import EpisodePage from '@/components/EpisodePage'
import React from 'react'
import { parse } from 'rss-to-json'
import { notFound } from 'next/navigation'

type EpisodeProps = {
	id: string
	title: string
	audio: {
		src: string
		type: string
	}
	published: string
	description: string
	content: string
}

async function getEpisode(params: string) {
	let feed = await parse('https://their-side-feed.vercel.app/api/feed')
	let episode = feed.items
		.map(({ id, title, description, content, enclosures, published }) => ({
			id: id.toString(),
			title: `${id}: ${title}`,
			description,
			content,
			published,
			audio: enclosures.map((enclosure: { url: string; type: string }) => ({
				src: enclosure.url,
				type: enclosure.type,
			}))[0],
		}))
		.find(({ id }) => id === params)
	return episode as EpisodeProps
}

const page = async ({ params }: { params: { episode: string } }) => {
	const episode = await getEpisode(params.episode)
	console.log(params.episode)
	if (!episode) return notFound()
	return <EpisodePage episode={episode} key={episode.id} />
}

export default page
