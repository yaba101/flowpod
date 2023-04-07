import { AudioProvider } from '@/components/AudioProvider'
import './globals.css'

export const metadata = {
	title: 'FlowPod',
	description: 'FlowPod HomePage',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body>
				<AudioProvider>{children}</AudioProvider>
			</body>
		</html>
	)
}
