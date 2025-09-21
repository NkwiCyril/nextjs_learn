import Image from "next/image";
import Navbar from "../components/navbar";
import SearchBar from "@/components/SearchBar";
import TodayCard from "@/components/TodayCard";
import StatCard from "@/components/StatCard";
import HourlyList, { HourItem } from "@/components/HourlyList";
import DailyGrid, { DayItem } from "@/components/DailyGrid";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 mx-6 md:mx-12 lg:mx-24 xl:mx-40 my-8">
      <Navbar />
      <header className="flex flex-col items-center gap-6">
        <h1 className="text-4xl md:text-5xl font-semibold text-center">
          How's the sky looking today?
        </h1>
        <SearchBar />
      </header>

      <section className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
        <TodayCard
          city="Berlin, Germany"
          dateLabel="Tuesday, Aug 5, 2025"
          temperature={20}
          iconSrc="/images/icon-sunny.webp"
        />

        <HourlyList
          items={
            Array.from({ length: 8 }).map((_, i) => ({
              time: `${3 + i} PM`,
              temp: "18°",
              iconSrc: "/images/icon-partly-cloudy.webp",
            })) as HourItem[]
          }
        />
      </section>

      <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Feels Like", value: "18°" },
          { label: "Humidity", value: "46%" },
          { label: "Wind", value: "14 km/h" },
          { label: "Precipitation", value: "0 mm" },
        ].map((item) => (
          <StatCard key={item.label} label={item.label} value={item.value} />
        ))}
      </section>

      <DailyGrid
        days={
          [
            {
              label: "Tue",
              hi: "20°",
              lo: "14°",
              iconSrc: "/images/icon-rain.webp",
            },
            {
              label: "Wed",
              hi: "21°",
              lo: "15°",
              iconSrc: "/images/icon-partly-cloudy.webp",
            },
            {
              label: "Thu",
              hi: "24°",
              lo: "14°",
              iconSrc: "/images/icon-sunny.webp",
            },
            {
              label: "Fri",
              hi: "25°",
              lo: "13°",
              iconSrc: "/images/icon-overcast.webp",
            },
            {
              label: "Sat",
              hi: "21°",
              lo: "15°",
              iconSrc: "/images/icon-drizzle.webp",
            },
            {
              label: "Sun",
              hi: "26°",
              lo: "16°",
              iconSrc: "/images/icon-fog.webp",
            },
            {
              label: "Mon",
              hi: "24°",
              lo: "15°",
              iconSrc: "/images/icon-storm.webp",
            },
          ] as DayItem[]
        }
      />
    </main>
  );
}
