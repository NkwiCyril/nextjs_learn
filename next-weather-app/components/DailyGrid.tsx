import Image from "next/image";

export type DayItem = {
  label: string;
  hi: string;
  lo: string;
  iconSrc: string;
};

type DailyGridProps = {
  title?: string;
  days: DayItem[];
};

export default function DailyGrid({
  title = "Daily forecast",
  days,
}: DailyGridProps) {
  return (
    <section>
      <h3 className="text-lg font-medium mb-3">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
        {days.map((day) => (
          <div
            key={day.label}
            className="bg-[--neutral-800] border border-[--neutral-700] rounded-xl p-4 flex flex-col items-center gap-3"
          >
            <span className="text-sm text-[--neutral-200]">{day.label}</span>
            <Image src={day.iconSrc} alt="icon" width={36} height={36} />
            <div className="text-sm flex gap-2 opacity-90">
              <span>{day.hi}</span>
              <span className="opacity-70">{day.lo}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
