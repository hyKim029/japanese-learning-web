import ExpressionForm from "@/components/ExpressionForm";

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

        <ExpressionForm />
      </div>
    </main>
  );
}