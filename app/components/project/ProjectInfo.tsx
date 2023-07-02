export default function ProjectInfoSection({
    bodyText,
    clientName,
    datePeriod,
  }: {
    bodyText: string;
    clientName: string;
    datePeriod: string;
  }) {
    return (
        <div className="flex flex-col mt-3">
        <div className="flex justify-between px-4 bg-slate-50 p-4 text-sm">
          <span>{clientName}</span>
          <span>{datePeriod}</span>
        </div>

        <p className="bg-slate-100 p-4 text-sm leading-relaxed">
          {bodyText}
        </p>
      </div>
    );
  }
  