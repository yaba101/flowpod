import EpisodeItem, { type EpisodeProps } from '@/components/EpisodeItem'
import { client } from '@/lib/contentful/client'

export type EpisodeTypeProps = {
	fields: {
		podcastAudio: {
			sys: {
				id: string
				createdAt: string
			}
			fields: {
				file: {
					url: string
					contentType: string
				}
			}
		}
		title: string
		slug: string
		description: string
		content: string
	}
}

async function getEpisodes(): Promise<EpisodeProps[]> {
	const response = await client.getEntries({ content_type: 'episodes' })
	const episodes: EpisodeProps[] = await response.items.map(
		(item: EpisodeTypeProps) => {
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
			}
		}
	)
	return episodes
}

const page = async () => {
	const episodes = await getEpisodes()

	return (
		<>
			<section className='h-screen dark:bg-gray-800 dark:text-gray-100'>
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
							{episodes.map((episode: EpisodeProps) => (
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
