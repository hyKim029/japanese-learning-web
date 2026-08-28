import StudySummary from "@/components/StudySummary";
import QuizStartCard from "@/components/QuizStartCard";
import RecentExpressions from "@/components/RecentExpressions";
import Link from "next/link";

function QuizButton() {
  return (
    <button className="rounded-lg bg-black px-6 py-3 font-medium text-white">
      오늘의 퀴즈 시작
    </button>
  );
}

export default function Home() {
  const recentExpressions = [
    {
      japanese: "立ち止まる",
      meaning: "멈춰 서다",
      isCorrect: false,
    },
    {
      japanese: "気をつける",
      meaning: "조심하다",
      isCorrect: true,
    },
    {
      japanese: "思い込む",
      meaning: "굳게 믿다",
      isCorrect: false,
    },
  ];
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <section>
          <p className="text-sm font-medium text-gray-500">
            Japanese Learning Service
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            오늘도 일본어를 공부해볼까요?
          </h2>

          <p className="mt-4 text-gray-600">
            저장한 표현을 다시 떠올리고 직접 사용해보세요.
          </p>
        </section>

        <div className="mt-10">
          <StudySummary
            reviewCount={12}
            completedCount={8}
          />
        </div>

        <div className="mt-6">
          <QuizStartCard/>
          <Link
            href="/expressions/new"
            className="inline-block rounded-lg border bg-white px-5 py-3 font-medium text-gray-900"
          >
            표현 추가
          </Link>
          <RecentExpressions expressions={recentExpressions} />
        </div>
      </div>
    </main>
  );
}