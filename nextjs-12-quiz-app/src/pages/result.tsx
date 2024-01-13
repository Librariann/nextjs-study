import React from "react";
import { TQuiz, TSavedAnswer } from "@/types/quiz";
import useSWR from "swr";

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

  return <div>result</div>;
}

export default Result;
