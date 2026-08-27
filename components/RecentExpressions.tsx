type Expression = {
  japanese: string;
  meaning: string;
  isCorrect: boolean;
};

type RecentExpressionsProps = {
  expressions: Expression[];
};

export default function RecentExpressions({
  expressions,
}: RecentExpressionsProps) {
  return (
    <section className="mt-8 rounded-xl border bg-white">
      <div className="border-b px-6 py-5">
        <h3 className="font-bold text-gray-900">
          최근 학습
        </h3>
      </div>

      <div>
        {expressions.map((expression) => (
          <div
            key={expression.japanese}
            className="flex items-center justify-between border-b px-6 py-4 last:border-b-0"
          >
            <div>
              <p className="font-medium text-gray-900">
                {expression.japanese}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                {expression.meaning}
              </p>
            </div>

            <span
              className={
                expression.isCorrect
                  ? "text-sm font-medium text-green-600"
                  : "text-sm font-medium text-red-600"
              }
            >
              {expression.isCorrect ? "정답" : "오답"}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}