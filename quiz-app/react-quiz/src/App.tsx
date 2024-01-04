import { useEffect, useState } from "react";
import { IQuestions, IUserAnswer } from "./types";
import { getQuestionList } from "./services/fetchQuestions";
import { Difficulty, totalQuestions } from "./constants";
import AppSpinner from "./components/Spinner";
import { Box, Heading } from "@chakra-ui/react";
import AppButton from "./components/AppButton";
import QuestionCard from "./components/QuestionCard";

function App() {
  const [startQuiz, setStartQuiz] = useState(false);
  const [questions, setQuestions] = useState<IQuestions[]>([]);
  const [userAnswer, setUserAnswer] = useState<IUserAnswer[]>([]);
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

  const startQuizGame = () => {};
  const checkAnswer = () => {};
  const nextQuestion = () => {};
  const replayQuiz = () => {};

  return (
    <main>
      {loading && (
        <div className="app-spinner">
          <AppSpinner
            speed="0.65s"
            emptyColor="gray.200"
            color="purple"
            size="lg"
            thickness="5px"
          />
        </div>
      )}

      {setUserAnswer.length === questionNumber &&
      !gameOver &&
      !loading &&
      !startQuiz ? (
        <div>
          <Box boxShadow="base" p="6" rounded="md" bg="white" maxW="560px">
            <Heading as="h2" size="lg" mb={2}>
              퀴즈 앱
            </Heading>
            <p>
              참 또는 거짓으로 대답할 수 있는 {totalQuestions}개의 질문이
              제시됩니다.
            </p>
            <AppButton
              colorScheme="purple"
              variant="solid"
              onClick={startQuizGame}
              value="Start Quiz Game"
            />
          </Box>
        </div>
      ) : null}

      {!loading && !gameOver && startQuiz && (
        <Box boxShadow="base" p="6" rounded="md" bg="white" maxW="560px">
          <QuestionCard
            questions={questions[questionNumber].question}
            category={questions[questionNumber].category}
            checkAnswer={checkAnswer}
            totalQuestions={totalQuestions}
            questionNumber={questionNumber}
          />

          <AppButton
            disabled={
              userAnswer.length === questionNumber + 1 &&
              questionNumber !== totalQuestions
                ? false
                : true
            }
            colorScheme="purple"
            variant="solid"
            onClick={nextQuestion}
            value="Next Question"
            className="next-button"
            width="full"
          />
        </Box>
      )}

      {gameOver && (
        <>
          <Box boxShadow="base" p="6" rounded="md" bg="white" maxW="560px">
            <Box mb={4}>
              <Box fontWeight="bold" as="h3" fontSize="4xl">
                Game Over!
              </Box>
              <Box as="h3" fontSize="xl">
                Your Score is {score}/{totalQuestions}
              </Box>
            </Box>
            {userAnswer.map((answer, index) => (
              <Box key={index}>
                <div className="answer-list">
                  <Box fontSize="md" fontWeight="bold">
                    Q.
                    <p dangerouslySetInnerHTML={{ __html: answer.question }} />
                  </Box>
                  <ul>
                    <li> You Answerd: {answer.answer}</li>
                    <li>Correct answer: {answer.correctAnswer}</li>
                  </ul>
                </div>
              </Box>
            ))}
            <AppButton
              colorScheme="purple"
              variant="solid"
              onClick={replayQuiz}
              value="Replay Quiz"
              width="full"
            />
          </Box>
        </>
      )}
    </main>
  );
}

export default App;
