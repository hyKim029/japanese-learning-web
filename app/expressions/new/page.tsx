export default function NewExpressionPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-2xl px-6 py-12">
        <div>
          <p className="text-sm font-medium text-gray-500">
            표현 관리
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            새 표현 추가
          </h1>

          <p className="mt-3 text-gray-600">
            다시 학습하고 싶은 일본어 표현을 저장하세요.
          </p>
        </div>

        <form className="mt-10 space-y-6">
          <div>
            <label
              htmlFor="japanese"
              className="block text-sm font-medium text-gray-900"
            >
              일본어 표현
            </label>

            <input
              id="japanese"
              name="japanese"
              type="text"
              placeholder="예: 気をつける"
              className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-500 focus:ring-2"
            />
          </div>

          <div>
            <label
              htmlFor="meaning"
              className="block text-sm font-medium text-gray-900"
            >
              뜻
            </label>

            <input
              id="meaning"
              name="meaning"
              type="text"
              placeholder="예: 조심하다"
              className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-500 focus:ring-2"            />
          </div>

          <div>
            <label
              htmlFor="memo"
              className="block text-sm font-medium text-gray-900"
            >
              메모
            </label>

            <textarea
              id="memo"
              name="memo"
              rows={4}
              placeholder="예: ～に気をつける 형태로 자주 사용"
              className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-500 focus:ring-2"
            />
          </div>

          <div>
            <label
              htmlFor="tags"
              className="block text-sm font-medium text-gray-900"
            >
              태그
            </label>

            <input
              id="tags"
              name="tags"
              type="text"
              placeholder="예: 동사, N2"
              className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-500 focus:ring-2"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-black px-6 py-3 font-medium text-white"
          >
            저장하기
          </button>
        </form>
      </div>
    </main>
  );
}