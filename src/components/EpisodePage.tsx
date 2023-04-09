'use client'
import { useMemo } from 'react'
import { useAudioPlayer } from '@/components/AudioProvider'
import { Container } from '@/components/Container'

import { PlayButton } from '@/components/player/PlayButton'
import Markdoc from '@markdoc/markdoc'
import { format } from 'date-fns'

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

export default function EpisodePage({ episode }: { episode: EpisodeProps }) {
	let date = new Date(episode.published)
	const ast = Markdoc.parse(episode.content)

	const content = Markdoc.transform(ast)

	const html = Markdoc.renderers.html(content)

	let audioPlayerData = useMemo(
		() => ({
			title: episode.title,
			audio: {
				src: episode.audio.src,
				type: episode.audio.type,
			},
			link: `/episodes/${episode.slug}`,
		}),
		[episode]
	)
	let player = useAudioPlayer(audioPlayerData)

	return (
		<>
			<article className='py-5 bg-gray-800 lg:py-20 overflow-hidden'>
				<Container>
					<header className='flex flex-col'>
						<div className='flex items-center gap-6'>
							<PlayButton player={player} size='large' />
							<div className='flex flex-col'>
								<h1 className='mt-2 text-4xl font-bold text-slate-200'>
									{episode.title}
								</h1>
								<time className='order-first font-mono text-sm leading-7 text-slate-500'>
									{format(date, 'h:mm a')}
								</time>
							</div>
						</div>
						<p className='mt-3 ml-24 text-lg font-medium leading-8 text-slate-300'>
							{episode.description}
						</p>
					</header>
					<hr className='my-12 border-gray-200' />
					<div
						className=' text-gray-300 prose prose-slate h-screen '
						dangerouslySetInnerHTML={{ __html: html }}
					/>
				</Container>
			</article>
		</>
	)
}
