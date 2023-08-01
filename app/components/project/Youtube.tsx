export default function Youtube({id}: {id: string}) {
    return (
        <iframe
        width="100%"
        height={450}
        src={'https://www.youtube.com/embed/' + id}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        ></iframe>
    )
}