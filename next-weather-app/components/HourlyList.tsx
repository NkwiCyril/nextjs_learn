import Image from "next/image";

export type HourItem = {
  time: string;
  temp: string;
  iconSrc: string;
};

type HourlyListProps = {
  title?: string;
  items: HourItem[];
};

export default function HourlyList({
  title = "Hourly forecast",
  items,
}: HourlyListProps) {
  return (
    <aside className="bg-[--neutral-800] rounded-xl border border-[--neutral-700] p-4">
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <div className="space-y-2">
        {items.map((h, i) => (
          <div
            key={i}
            className="flex items-center justify-between bg-[--neutral-700]/40 rounded-lg px-3 py-2"
          >
            <div className="flex items-center gap-3">
              <span className="text-sm">{h.time}</span>
              <Image src={h.iconSrc} alt="w" width={28} height={28} />
            </div>
            <span className="text-sm">{h.temp}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}
