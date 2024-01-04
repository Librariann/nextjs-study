import { useEffect, useState } from "react";
import { IQuestions, IUserAnswer } from "./types";
import { getQuestionList } from "./services/fetchQuestions";
import { Difficulty, totalQuestions } from "./constants";

function App() {
  const [startQuiz, setStartQuiz] = useState(false);
  const [questions, setQuestions] = useState<IQuestions[]>([]);
  const [usetAnswer, setUserAnswer] = useState<IUserAnswer[]>([]);
  const [loading, setLoading] = useState(true);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const fetchQuestion = async () => {
      const questionListing = await getQuestionList(
        totalQuestions,
        Difficulty.EASY
      );
      setQuestions(questionListing);
      setLoading(false);
    };
    fetchQuestion();
  }, []);

  return <div className="App"></div>;
}

export default App;
