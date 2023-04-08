import React, { Fragment } from 'react'
import { AudioPlayer } from '@/components/player/AudioPlayer'

export default function EpisodesLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			{children}
			<div className='fixed inset-x-0 bottom-0 z-10 lg:left-112 xl:left-120'>
				<AudioPlayer />
			</div>
		</>
	)
}
