import React from "react";
import { TQuiz, TSavedAnswer } from "@/types/quiz";
import useSWR from "swr";
import Link from "next/link";

function Result() {
  const getAnswers =
    (typeof window !== "undefined" && localStorage.getItem("quiz")) ||
    JSON.stringify({});

  const answers: TSavedAnswer = JSON.parse(getAnswers);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  const { data, error } = useSWR(`./api/quiz`, fetcher);
  if (error) return <div>에러가 났습니다.</div>;
  if (!data) return <div>로딩중...</div>;

  let correctAnswers = 0;

  if (data) {
    data.map((quiz: TQuiz) => {
      if (quiz.answer === answers[quiz.id]) {
        correctAnswers = correctAnswers + 1;
      }
    });
  }

  return (
    <>
      <div>
        <Link href="/">다시 시작하기</Link>
      </div>
      <h2>
        {correctAnswers} 개의 문제를 맞췄습니다.
        {correctAnswers > (data.length / 100) * 70 ? "passed" : "failed"}
      </h2>
      <br />

      {data.map((quiz: TQuiz) => (
        <div key={quiz.id}>
          <div>
            <p>{quiz.question}</p>
          </div>
          <ul>
            {quiz.options.map((option: string, index: number) => (
              <li key={index}>
                {option === quiz.answer ? (
                  quiz.answer === answers[quiz.id] ? (
                    <span>{option} &nbsp; ✅</span>
                  ) : (
                    <span>{option}</span>
                  )
                ) : answers[quiz.id] === option ? (
                  <>
                    <span>{option} &nbsp; ❌</span>
                  </>
                ) : (
                  <span>{option}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

export default Result;
