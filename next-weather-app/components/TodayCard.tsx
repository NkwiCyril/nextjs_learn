import Image from "next/image";

type TodayCardProps = {
  city: string;
  dateLabel: string;
  temperature: string | number;
  iconSrc: string;
  background?: string;
};

export default function TodayCard({
  city,
  dateLabel,
  temperature,
  iconSrc,
  background = "/images/bg-today-large.svg",
}: TodayCardProps) {
  return (
    <article
      className="rounded-xl overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-6 sm:p-8 md:p-10">
        <p className="text-[--neutral-200]">{city}</p>
        <p className="text-[--neutral-200] mt-1">{dateLabel}</p>
        <div className="flex items-end justify-between mt-8">
          <div className="flex gap-4">
            <Image src={iconSrc} alt="weather" width={56} height={56} />
          </div>
          <div className="text-7xl md:text-8xl font-semibold">
            {temperature}
          </div>
        </div>
      </div>
    </article>
  );
}
