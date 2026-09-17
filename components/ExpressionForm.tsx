"use client";

import { useState } from "react";

type Expression = {
  japanese: string;
  meaning: string;
  memo: string;
  tags: string[];
};

type ExpressionFormProps = {
  onSubmit: (expression: Expression) => void;
};

export default function ExpressionForm(props: ExpressionFormProps) {
  const [japanese, setJapanese] = useState("");
  const [meaning, setMeaning] = useState("");
  const [memo, setMemo] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
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
    const expression = {
      japanese,
      meaning,
      memo,
      tags: parsedTags,
    };

    props.onSubmit(expression);

    setMessage("저장이 완료되었습니다");
    setTimeout(() => {
      setMessage("");
    }, 2000);

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
        className="w-full rounded-lg bg-black px-6 py-3 font-medium text-white"
      >
        저장하기
      </button>

    </form>
  );
}