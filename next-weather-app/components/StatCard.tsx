type StatCardProps = {
  label: string;
  value: string | number;
  className?: string;
};

export default function StatCard({ label, value, className }: StatCardProps) {
  return (
    <div
      className={`bg-[--neutral-800] border border-[--neutral-700] rounded-xl p-4 ${
        className ?? ""
      }`}
    >
      <p className="text-sm text-[--neutral-200]">{label}</p>
      <p className="text-2xl mt-2">{value}</p>
    </div>
  );
}
