"use client";
import { IQuestion } from "@/utils/types";
import React, { useState } from "react";
import SelectState from "./SelectState";
import { getQuizQuestions, getStates } from "@/utils/functions";

const QuizForm = () => {
  const [state, setState] = useState(1);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizEnded, setQuizEnded] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState(false);
  const [answered, setAnswered] = useState(false);

  const startQuiz = () => {
    setQuestions(getQuizQuestions(state));
    setQuizStarted(true);
  };

  return (
    <div className="flex flex-col space-y- md:space-y-8 p-4 lg:p-8">
      <h1 className="text-4xl font-semibold pb-4 mb-4 border-b border-gray-300">
        시험
      </h1>
      {!quizStarted && (
        <div className="bg-slate-50 p-6 rounded-xl shadow">
          <h2 className="text-lg">상태선택</h2>
          <SelectState
            states={getStates()}
            state={(stateValue) => setState(stateValue)}
          />
          <button className="my-4 px-4 py-2 text-white rounded-lg shadow bg-blue-600 hover:bg-blue-500">
            연습 테스트 시작
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizForm;
