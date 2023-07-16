export default function Video({ webm, mp4, poster, alt, title, description }) {
  return (
    <video autoPlay loop width="1280" height="720" className="off-width">
      {webm && <source src={webm} type="video/webm" />}
      {mp4 && <source src={mp4} type="video/mp4" />}
      Your browser does not support the video tag.
    </video>
  );
}
