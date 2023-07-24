


export default function Figma({url}: {url: string}) {
  return (
    <iframe
      width="100%"
      height={700}
      src={`https://www.figma.com/embed?embed_host=share&url=${url}`}
      className='off-width'
    ></iframe>
  );
}
