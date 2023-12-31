function BuildTagList({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 bg-slate-100 p-3 text-sm" id="tag-list">
      {tags.map((tag) => (
        <span key={tag} className="bg-slate-200 px-2 py-0.5 text-sm text-slate-600 rounded" id="tag">
          {tag}
        </span>
      ))}
    </div>
  );
}



export default function ProjectInfoSection({
  bodyText,
  clientName,
  datePeriod,
  tags
}: {
  bodyText: string;
  clientName: string;
  datePeriod: string;
  tags: string[];
}) {
  return (
    <div className="flex flex-col mt-3 ">
      <div className="flex justify-between px-4 bg-slate-100 p-4 text-sm">
        <span>{clientName}</span>
        <span>{datePeriod}</span>
      </div>

      <p className="bg-slate-200 px-4 py-6 text-sm leading-relaxed">{bodyText}</p>


      <BuildTagList tags={tags} />
    </div>
  );
}
