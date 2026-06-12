    type Props = {
    params: Promise<{
        id: string
    }>
    }

    export default async function WatchPage({
    params,
    }: Props) {
    const { id } = await params

    return (
        <main className="p-8">
        <div className="aspect-video w-full max-w-5xl">
            <iframe
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${id}`}
            allowFullScreen
            />
        </div>
        </main>
    )
    }