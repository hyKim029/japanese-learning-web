
"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function SupabaseTestPage() {
  const [result, setResult] = useState("아직 테스트하지 않음");
  const [userInfo, setUserInfo] = useState("아직 확인하지 않음");

  async function handleTest() {
    const supabase = createClient();

    const { data, error } = await supabase
      .from("expressions")
      .select("id")
      .limit(1);

    if (error) {
      setResult(`오류: ${error.message}`);
      return;
    }

    setResult(`요청 성공! 조회된 행: ${data.length}개`);
  }

  async function handleCheckUser() {
    const supabase = createClient();

    const { data, error } = await supabase.auth.getUser();

    if (error || !data.user) {
      setUserInfo("로그인된 사용자가 없습니다.");
      return;
    }

    setUserInfo(`로그인된 사용자: ${data.user.email}`);
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">
        Supabase 연결 테스트
      </h1>

      <button
        onClick={handleTest}
        className="mt-4 rounded bg-blue-600 px-4 py-2 text-white"
      >
        연결 테스트
      </button>

      <p className="mt-4">{result}</p>

      <hr className="my-6" />

      <h2 className="text-xl font-bold">
        로그인 상태 확인
      </h2>

      <button
        onClick={handleCheckUser}
        className="mt-4 rounded bg-green-600 px-4 py-2 text-white"
      >
        로그인 사용자 확인
      </button>

      <p className="mt-4">{userInfo}</p>
    </main>
  );
}
