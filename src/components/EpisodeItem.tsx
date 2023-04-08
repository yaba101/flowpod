'use client'
import { useMemo } from 'react'
import { useAudioPlayer } from './AudioProvider'
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

export default function EpisodeItem({ episode }: { episode: EpisodeProps }) {
	let date = new Date(episode.published)

	let audioPlayerData = useMemo(
		() => ({
			title: episode.title,
			audio: {
				src: episode.audio?.src,
				type: episode.audio?.type,
			},
			link: `/episodes/${episode.id}`,
		}),
		[episode]
	)
	let player = useAudioPlayer(audioPlayerData)

	return (
		<>
			<div className='col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700'>
				<div className='flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400'>
					<h3 className='text-xl font-semibold tracking-wide'>
						<Link href={`/episodes/${episode.id}`}>{episode.title}</Link>
					</h3>
					<FormattedDate
						date={date}
						className='order-first font-mono text-sm leading-7 text-slate-500'
					/>
					<p className='mt-3'>{episode.description}</p>
					<div className='flex items-center gap-4 mt-4'>
						<button
							type='button'
							onClick={() => player.toggle()}
							className='flex items-center text-sm font-bold leading-6 text-amber-800 hover:text-amber-900 active:text-teal-900'
							aria-label={`${player.playing ? 'Pause' : 'Play'} episode ${
								episode.title
							}`}>
							<PlayPauseIcon
								playing={player.playing}
								className='h-2.5 w-2.5 fill-current'
							/>
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
							href={`/episodes/${episode.id}`}
							className='flex items-center text-sm font-bold leading-6 text-teal-500 hover:text-amber-800 active:text-amber-900'
							aria-label={`Show notes for episode ${episode.title}`}>
							Show notes
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

function PlayPauseIcon({ playing, ...props }: any) {
	return (
		<svg aria-hidden='true' viewBox='0 0 10 10' fill='none' {...props}>
			{playing ? (
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d='M1.496 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H2.68a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H1.496Zm5.82 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H8.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H7.316Z'
				/>
			) : (
				<path d='M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z' />
			)}
		</svg>
	)
}
