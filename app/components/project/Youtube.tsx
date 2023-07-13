export default function Youtube({id}: {id: string}) {
    return (
        <iframe 
        width="1280"
        height="720"
        src={'https://www.youtube.com/embed/' + id}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="off-width"
        ></iframe>
    )
}