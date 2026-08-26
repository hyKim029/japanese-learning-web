function QuizButton() {
  return (
    <button className="rounded-lg bg-black px-6 py-3 font-medium text-white">
      오늘의 퀴즈 시작
    </button>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <section>
          <p className="text-sm font-medium text-gray-500">
            Japanese Learning Service
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            오늘도 일본어 표현을 복습해볼까요?
          </h2>

          <p className="mt-4 text-gray-600">
            저장한 표현을 다시 떠올리고 직접 사용해보세요.
          </p>
          <QuizButton></QuizButton>
        </section>
      </div>
    </main>
  );
}