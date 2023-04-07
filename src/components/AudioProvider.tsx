import { createContext, useContext, useMemo, useReducer, useRef } from 'react'

const AudioPlayerContext = createContext(null)

const reducers = {
	SET_META(state: any, action: { payload: any }) {
		return { ...state, meta: action.payload }
	},
	PLAY(state: any, _action: any) {
		return { ...state, playing: true }
	},
	PAUSE(state: any, _action: any) {
		return { ...state, playing: false }
	},
	TOGGLE_MUTE(state: { muted: any }, _action: any) {
		return { ...state, muted: !state.muted }
	},
	SET_CURRENT_TIME(state: any, action: { payload: any }) {
		return { ...state, currentTime: action.payload }
	},
	SET_DURATION(state: any, action: { payload: any }) {
		return { ...state, duration: action.payload }
	},
}

function audioReducer(state: any, action: any) {
	return reducers[action?.type](state, action)
}

export function AudioProvider({ children }: { children: React.ReactNode }) {
	let [state, dispatch] = useReducer(audioReducer, {
		playing: false,
		muted: false,
		duration: 0,
		currentTime: 0,
		meta: null,
	})
	let playerRef = useRef<any>(null)

	let actions = useMemo(() => {
		return {
			play(data: { audio: { src: any } }) {
				if (data) {
					dispatch({ type: 'SET_META', payload: data })

					if (playerRef.current.currentSrc !== data.audio.src) {
						let playbackRate = playerRef?.current?.playbackRate
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
			isPlaying(data: { audio: { src: any } }) {
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
						payload: Math.floor(event.target.currentTime),
					})
				}}
				onDurationChange={(event) => {
					dispatch({
						type: 'SET_DURATION',
						payload: Math.floor(event.target.duration),
					})
				}}
				muted={state.muted}
			/>
		</>
	)
}

export function useAudioPlayer(data: unknown) {
	let player: any = useContext(AudioPlayerContext)

	return useMemo(
		() => ({
			...player,
			play() {
				player.play(data)
			},
			toggle() {
				player.toggle(data)
			},
			get playing() {
				return player.isPlaying(data)
			},
		}),
		[player, data]
	)
}
