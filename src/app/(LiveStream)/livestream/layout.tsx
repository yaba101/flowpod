export const metadata = {
	title: 'episode',
	description: 'FlowPod Episode',
}
export default function LiveStreamLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return <section>{children}</section>
}
