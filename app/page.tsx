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
      <div className="mx-auto max-w-4xl px-6 py-16">
        <header>
          <p className="text-sm font-medium text-gray-500">
            Japanese Learning Service
          </p>

          <h1 className="mt-3 text-4xl font-bold text-gray-900">
            ことばループ
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            저장한 일본어 표현을 다시 떠올리고,
            직접 사용하는 학습 서비스
          </p>
        </header>

        <section className="mt-12">
          <QuizButton />
        </section>
      </div>
    </main>
  );
}