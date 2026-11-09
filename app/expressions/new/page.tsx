"use client";
import { useState } from "react";
import ExpressionForm from "@/components/ExpressionForm";
import { createClient } from "@/lib/supabase/client";


type Expression = {
  japanese: string;
  meaning: string;
  memo: string;
  tags: string[];
};

export default function NewExpressionPage() {
  const [savedExpression, setSavedExpression] = useState<Expression | null>(null);

  
  async function handleExpressionSubmit(
    expression: Expression
  ): Promise<boolean> {
    console.log("부모 컴포넌트에 전달된 표현:", expression);
    const supabase = createClient();

    // 로그인 사용자 확인
    const { data: authData, error: authError } =
      await supabase.auth.getUser();

    if (authError || !authData.user) {
      return false;
    }


    const { data, error } = await supabase
      .from("expressions")
      .insert({
        user_id: authData.user.id,
        japanese: expression.japanese,
        meaning: expression.meaning,
        memo: expression.memo || null,
      })
      .select("id")
      .single();

    if (error) {
      console.error("표현 저장 실패:", error);
      return false;
    }

    console.log("새로 생성된 표현 ID:", data.id);
    
const tagIds: string[] = [];

for (const tagName of [...new Set(expression.tags)]) {
  // 기존 태그 검색
  const { data: existingTag, error: lookupError } =
    await supabase
      .from("tags")
      .select("id")
      .eq("user_id", authData.user.id)
      .eq("name", tagName)
      .maybeSingle();

  if (lookupError) {
    console.error("태그 조회 실패:", lookupError);
    return false;
  }

  if (existingTag) {
    tagIds.push(existingTag.id);
    continue;
  }

  // 기존 태그가 없으면 생성
    const { data: newTag, error: tagError } =
      await supabase
        .from("tags")
        .insert({
          user_id: authData.user.id,
          name: tagName,
        })
        .select("id")
        .single();

    if (tagError) {
      console.error("태그 생성 실패:", tagError);
      return false;
    }

    tagIds.push(newTag.id);
  }

  console.log("저장할 태그 ID 목록:", tagIds);
  
  const expressionTagRows = tagIds.map((tagId) => ({
    expression_id: data.id,
    tag_id: tagId,
  }));

  const { error: relationError } = await supabase
    .from("expression_tags")
    .insert(expressionTagRows);

  if (relationError) {
    console.error("표현-태그 연결 실패:", relationError);
    return false;
  }

  console.log("표현-태그 연결 성공!");


    setSavedExpression(expression);
    return true;
  }


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
              {savedExpression !== null && (
                <div>
                  <p>{savedExpression.japanese}</p>
                  <p>{savedExpression.meaning}</p>
                  <p>{savedExpression.memo}</p>

                  {savedExpression.tags.map((tag) => (
                    <p key={tag}>{tag}</p>
                  ))}
                </div>
              )}
        </div>
        
        <ExpressionForm onSubmit={handleExpressionSubmit} />
      </div>
    </main>
  );
}