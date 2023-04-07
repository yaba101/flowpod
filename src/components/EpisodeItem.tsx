import { useMemo } from 'react'
import { useAudioPlayer } from './AudioProvider'
import { Container } from './Container'
import Link from 'next/link'
import { FormattedDate } from './FormattedDate'

type EpisodeProps = {
	id: string
	title: string
	audio: {
		src: string
		type: string
	}
	published: string
	description: string
}

export default function EpisodeItem(episode: EpisodeProps) {
	let date = new Date(episode.published)

	let audioPlayerData = useMemo(
		() => ({
			title: episode.title,
			audio: {
				src: episode.audio.src,
				type: episode.audio.type,
			},
			link: `/${episode.id}`,
		}),
		[episode]
	)
	let player = useAudioPlayer(audioPlayerData)

	return (
		<article
			aria-labelledby={`episode-${episode.id}-title`}
			className='py-10 sm:py-12'>
			<Container>
				<div className='flex flex-col items-start'>
					<h2
						id={`episode-${episode.id}-title`}
						className='mt-2 text-lg font-bold text-slate-900'>
						<Link href={`/${episode.id}`}>{episode.title}</Link>
					</h2>
					<FormattedDate
						date={date}
						className='order-first font-mono text-sm leading-7 text-slate-500'
					/>
					<p className='mt-1 text-base leading-7 text-slate-700'>
						{episode.description}
					</p>
					<div className='mt-4 flex items-center gap-4'>
						<button
							type='button'
							onClick={() => player.toggle()}
							className='flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900'
							aria-label={`${player.playing ? 'Pause' : 'Play'} episode ${
								episode.title
							}`}>
							<span className='ml-3' aria-hidden='true'>
								Listen
							</span>
						</button>
						<span
							aria-hidden='true'
							className='text-sm font-bold text-slate-400'>
							/
						</span>
						<Link
							href={`/${episode.id}`}
							className='flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900'
							aria-label={`Show notes for episode ${episode.title}`}>
							Show notes
						</Link>
					</div>
				</div>
			</Container>
		</article>
	)
}
