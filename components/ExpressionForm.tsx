"use client";

import { useState } from "react";

export default function ExpressionForm() {
  const [japanese, setJapanese] = useState("");

  return (
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
          value={japanese}
          onChange={(e) => setJapanese(e.target.value)}
          placeholder="예: 気をつける"
          className="mt-2 w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:border-gray-500 focus:ring-2"
        />
      </div>
    </form>
  );
}