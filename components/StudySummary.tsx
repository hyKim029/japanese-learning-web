type StudySummaryProps = {
  reviewCount: number;
  completedCount: number;
};

export default function StudySummary({
  reviewCount,
  completedCount,
}: StudySummaryProps) {
  return (
    <section className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-xl border bg-white p-6">
        <p className="text-sm text-gray-500">복습할 표현</p>
        <p className="mt-2 text-3xl font-bold text-gray-900">
          {reviewCount}
        </p>
      </div>

      <div className="rounded-xl border bg-white p-6">
        <p className="text-sm text-gray-500">오늘 푼 문제</p>
        <p className="mt-2 text-3xl font-bold text-gray-900">
          {completedCount}
        </p>
      </div>
    </section>
  );
}