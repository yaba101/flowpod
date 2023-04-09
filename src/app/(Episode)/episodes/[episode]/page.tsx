import EpisodePage from '@/components/EpisodePage'
import { notFound } from 'next/navigation'
import { client } from '@/lib/contentful/client'
import { EpisodeTypeProps } from '../page'

type EpisodeProps = {
	id: string
	title: string
	slug: string
	audio: {
		src: string
		type: string
	}
	published: string
	description: string
	content: string
}

async function getEpisode(params: string): Promise<EpisodeProps> {
	const response = await client.getEntries({ content_type: 'episodes' })
	const episode: EpisodeProps = await response.items
		.map((item: EpisodeTypeProps) => {
			return {
				id: item.fields.podcastAudio.sys.id,
				title: item.fields.title,
				slug: item.fields.slug,
				published: item.fields.podcastAudio.sys.createdAt,
				description: item.fields.description,
				audio: {
					src: item.fields.podcastAudio.fields.file.url,
					type: item.fields.podcastAudio.fields.file.contentType,
				},
				content: item.fields.content,
			}
		})
		.find(({ slug }: { slug: string }) => slug === params)

	return episode
}

const page = async ({ params }: { params: { episode: string } }) => {
	const episode = await getEpisode(params.episode)
	if (!episode) return notFound()
	return <EpisodePage episode={episode} key={episode.id} />
}

export default page
