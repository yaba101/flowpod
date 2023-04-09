'use client'
import { createContext, useContext, useMemo, useReducer, useRef } from 'react'

type Actions = {
	play(data: {
		title: string
		audio: {
			src: string
			type: string
		}
		link: string
	}): void
	pause(): void
	toggle(data: any): void
	seekBy(amount: any): void
	seek(time: any): void
	playbackRate(rate: any): void
	toggleMute(): void
	isPlaying(data: {
		title: string
		audio: {
			src: string
			type: string
		}
		link: string
	}): boolean
}
const initState = {
	playing: false,
	muted: false,
	duration: 0,
	currentTime: 0,
	meta: {
		title: '',
		audio: {
			src: '',
			type: '',
		},
		link: '',
	},
}

type AudioPlayerContextType = Actions & typeof initState

const AudioPlayerContext = createContext<AudioPlayerContextType | null>(null)

type SetMetaType = {
	type: 'SET_META'
	payload: any
}
type AudioPlayTypes = {
	type: 'PLAY' | 'PAUSE' | 'TOGGLE_MUTE'
	payload?: boolean
}
type AudioSetTimeTypes = {
	type: 'SET_CURRENT_TIME' | 'SET_DURATION'
	payload: any
}

type AudioActionType = SetMetaType | AudioPlayTypes | AudioSetTimeTypes

type AudioStateType = {
	meta: any
	playing: boolean
	muted: boolean
	currentTime: any
	duration: any
}

function audioReducer(state: AudioStateType, action: AudioActionType) {
	switch (action.type) {
		case 'SET_META':
			return {
				...state,
				meta: action.payload,
			}
		case 'PLAY':
			return {
				...state,
				playing: true,
			}
		case 'PAUSE':
			return {
				...state,
				playing: false,
			}
		case 'TOGGLE_MUTE':
			return {
				...state,
				muted: !state.muted,
			}
		case 'SET_CURRENT_TIME':
			return {
				...state,
				currentTime: action.payload,
			}
		case 'SET_DURATION':
			return {
				...state,
				duration: action.payload,
			}
		default:
			return state
	}
}

export function AudioProvider({ children }: { children: React.ReactNode }) {
	let [state, dispatch] = useReducer(audioReducer, {
		playing: false,
		muted: false,
		duration: 0,
		currentTime: 0,
		meta: null,
	})
	let playerRef: any = useRef<any>(null)

	let actions = useMemo(() => {
		return {
			play(data: { audio: { src: string } }) {
				if (data) {
					dispatch({ type: 'SET_META', payload: data })

					if (playerRef.current.currentSrc !== data.audio.src) {
						let playbackRate = playerRef.current.playbackRate
						playerRef.current.src = data.audio.src
						playerRef.current.load()
						playerRef.current.pause()
						playerRef.current.playbackRate = playbackRate
						playerRef.currentTime = 0
					}
				}

				playerRef.current.play()
			},
			pause() {
				playerRef.current.pause()
			},
			toggle(data: any) {
				this.isPlaying(data) ? actions.pause() : actions.play(data)
			},
			seekBy(amount: any) {
				playerRef.current.currentTime += amount
			},
			seek(time: any) {
				playerRef.current.currentTime = time
			},
			playbackRate(rate: any) {
				playerRef.current.playbackRate = rate
			},
			toggleMute() {
				dispatch({ type: 'TOGGLE_MUTE' })
			},
			isPlaying(data: { audio: { src: string } }) {
				return data
					? state.playing && playerRef.current.currentSrc === data.audio.src
					: state.playing
			},
		}
	}, [state.playing])

	let api = useMemo(() => ({ ...state, ...actions }), [state, actions])

	return (
		<>
			<AudioPlayerContext.Provider value={api}>
				{children}
			</AudioPlayerContext.Provider>
			<audio
				ref={playerRef}
				onPlay={() => dispatch({ type: 'PLAY' })}
				onPause={() => dispatch({ type: 'PAUSE' })}
				onTimeUpdate={(event) => {
					dispatch({
						type: 'SET_CURRENT_TIME',
						payload: Math.floor((event.target as any).currentTime),
					})
				}}
				onDurationChange={(event) => {
					dispatch({
						type: 'SET_DURATION',
						payload: Math.floor((event.target as any).duration),
					})
				}}
				muted={state.muted}
			/>
		</>
	)
}

export function useAudioPlayer(data: any) {
	let player = useContext(AudioPlayerContext)

	return useMemo(
		() => ({
			...player,
			play() {
				player?.play(data)
			},
			toggle() {
				player?.toggle(data)
			},
			get playing() {
				return player?.isPlaying(data)
			},
		}),
		[player, data]
	)
}
