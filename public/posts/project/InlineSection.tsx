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
      className={`grid grid-cols-1 xl:grid-cols-2 gap-12 off-width items-center bg-slate-100 px-4 lg:px-8 py-6 lg:py-12 ${className}`}
      id={id}
    >
      {children}
    </div>
  );
}
