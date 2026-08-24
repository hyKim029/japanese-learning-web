# Database Design

## 1. 설계 목표

MVP에서 필요한 일본어 표현과 퀴즈 학습 기록을 저장하고,
사용자별 데이터를 분리하여 관리한다.

핵심 학습 흐름인

표현 저장 → 퀴즈 → 정답/오답 기록 → 오답 복습

을 지원할 수 있는 구조를 우선적으로 설계한다.

---

## 2. Tables

### users

사용자 계정 정보를 관리한다.

주요 데이터:

- id
- email

---

### expressions

사용자가 학습하기 위해 저장한 일본어 표현을 관리한다.

주요 컬럼:

- id
- user_id
- japanese
- meaning
- type
- reading
- memo
- created_at
- updated_at

`type`은 `word` 또는 `sentence`로 구분한다.

---

### quiz_attempts

사용자가 표현을 퀴즈로 학습한 기록을 관리한다.

주요 컬럼:

- id
- user_id
- expression_id
- is_correct
- answered_at

하나의 표현은 여러 번 퀴즈에 출제될 수 있으므로
`expressions`와 `quiz_attempts`는 1:N 관계를 가진다.

---

## 3. Relationships

### User → Expression

한 명의 사용자는 여러 개의 표현을 저장할 수 있다.

`users.id → expressions.user_id`

관계: 1:N

### User → Quiz Attempt

한 명의 사용자는 여러 번 퀴즈를 풀 수 있다.

`users.id → quiz_attempts.user_id`

관계: 1:N

### Expression → Quiz Attempt

하나의 표현은 여러 번 퀴즈에 출제될 수 있다.

`expressions.id → quiz_attempts.expression_id`

관계: 1:N

---

## 4. MVP ERD

```text
users
  │
  ├───────────────┐
  │               │
  │ 1:N           │ 1:N
  ▼               ▼
expressions    quiz_attempts
  │
  │ 1:N
  ▼
quiz_attempts