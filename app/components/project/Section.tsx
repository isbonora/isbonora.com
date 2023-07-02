export default function Section({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div className={`section ${className}`} id={id}>
      {children}
    </div>
  );
}
