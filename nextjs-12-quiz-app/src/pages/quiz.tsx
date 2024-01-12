import { TSavedAnswer } from "@/types/quiz";
import Link from "next/link";
import React, { ChangeEvent, useState } from "react";
import useSWR from "swr";
import styles from "@/styles/Quiz.module.css";

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    return res.json();
  });

const Quiz = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const { data, error } = useSWR(`/api/quiz?page=${pageIndex}`, fetcher);

  const [answerd, setAnswerd] = useState<TSavedAnswer>({});

  if (error) {
    return (
      <div>
        <h3>에러가 발생했습니다.</h3>
      </div>
    );
  }
  if (!data) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }

  const { quiz, next, prev, page, total } = data;

  const addAnswer = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const latestAnswers = { ...answerd, [name]: value };
    setAnswerd(latestAnswers);
    localStorage.setItem("quiz", JSON.stringify(latestAnswers));
  };

  return (
    <>
      <div className={styles.info}>
        <p>
          {parseInt(page) + 1} of {total}
        </p>
      </div>
      <div>
        <p>{quiz.question}</p>
        <ul>
          {quiz.options.map((option: string, index: number) => (
            <li key={index} className={styles.option}>
              <input
                type="radio"
                name={quiz.id.toString()}
                onChange={(e) => addAnswer(e)}
                value={option}
                checked={answerd[quiz.id] === option}
              />
              {option}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.navBtns}>
        {prev ? (
          <button onClick={() => setPageIndex(pageIndex - 1)}>이전 문제</button>
        ) : (
          <Link href="/">취소</Link>
        )}
        {next ? (
          <button
            onClick={() => setPageIndex(pageIndex + 1)}
            disabled={answerd[quiz.id] === undefined}
            className={
              answerd[quiz.id] === undefined ? "disabledBtn" : "activeBtn"
            }
          >
            다음문제
          </button>
        ) : (
          answerd[quiz.id] !== undefined && <Link href="/result">끝</Link>
        )}
      </div>
    </>
  );
};

export default Quiz;
