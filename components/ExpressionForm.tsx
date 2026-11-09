"use client";

import { useEffect, useState } from "react";

type Expression = {
  japanese: string;
  meaning: string;
  memo: string;
  tags: string[];
};

type ExpressionFormProps = {
  onSubmit: (expression: Expression) => Promise<boolean>;
};

export default function ExpressionForm(props: ExpressionFormProps) {
  const [japanese, setJapanese] = useState("");
  const [meaning, setMeaning] = useState("");
  const [memo, setMemo] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (message.trim() === "") {
      return;
    }

    const timer = setTimeout(() => {
      setMessage("");
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [message]);


  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    if (japanese.trim() === "") {
      setError("일본어 표현을 입력해주세요.");
      return;
    }

    if (meaning.trim() === "") {
      setError("뜻을 입력해주세요.");
      return;
    }

    const parsedTags = tagInput
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");

    if (parsedTags.length === 0) {
      setError("태그를 하나 이상 입력해주세요.");
      return;
    }

    setError("");
    setMessage("");

    const expression = {
      japanese,
      meaning,
      memo,
      tags: parsedTags,
    };

    // 부모에게 저장 요청하고 결과 기다리기
    let success = false;

    try {
      success = await props.onSubmit(expression);
    } catch (err) {
      console.error("저장 요청 오류:", err);
    } finally {
      setIsSaving(false);
    }  
    if (!success) {
      setError("저장에 실패했습니다. 로그인 상태와 연결을 확인해주세요.");
      return;
    }

    // DB 저장이 성공한 경우에만 실행
    setMessage("저장이 완료되었습니다.");

    setJapanese("");
    setMeaning("");
    setMemo("");
    setTagInput("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-10 space-y-6"
    >
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
          value={japanese}
          onChange={(e) => setJapanese(e.target.value)}
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
          value={meaning}
          onChange={(e) => setMeaning(e.target.value)}
          placeholder="예: 조심하다"
          className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-500 focus:ring-2"
        />
      </div>

      <textarea
        id="memo"
        name="memo"
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
        placeholder="예: 상대방에게 주의를 줄 때 자주 사용하는 표현"
        className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-500 focus:ring-2"
      />

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
            value={tagInput}
            onChange ={(e) => setTagInput(e.target.value)}
            placeholder="예: 일상, 동사, N2"
            className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-500 focus:ring-2"
          />
      </div>

      <div className="mt-4">
        {tags.map((tag) => (
          <span key={tag} className="mr-2">
            {tag}
          </span>
        ))}
      </div>
      
      {error && (
        <p className="mt-2 text-sm font-medium text-red-500">
          {error}
        </p>
      )}
      
      <div>
        <p>{message}</p>
      </div>

      <button
        type="submit"
        disabled={isSaving}
        className="w-full rounded-lg bg-black px-6 py-3 font-medium text-white disabled:opacity-50"
      >
        {isSaving ? "저장 중..." : "저장하기"}
      </button>
    </form>
  );
}