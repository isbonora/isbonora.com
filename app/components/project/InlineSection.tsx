import postStyles from "@/styles/post.module.scss";


export default function SideBySide({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div
      className={`${postStyles['inline-section']} ${className}`}
      id={id}
    >
      {children}
    </div>
  );
}
