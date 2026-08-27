import Link from "next/link";

export default function QuizStartCard() {
  return (
    <section className="rounded-xl border bg-white p-8">
      <h3 className="text-xl font-bold text-gray-900">
        오늘의 학습
      </h3>

      <p className="mt-2 text-gray-600">
        저장한 표현을 다시 떠올리고 일본어로 직접 답해보세요.
      </p>

      <Link
        href="/quiz"
        className="mt-6 inline-block rounded-lg bg-black px-6 py-3 font-medium text-white"
      >
        오늘의 퀴즈 시작
      </Link>
    </section>
  );
}