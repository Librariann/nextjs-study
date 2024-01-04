import { useEffect, useState } from "react";
import { IQuestions, IUserAnswer } from "./types";
import { getQuestionList } from "./services/fetchQuestions";
import { Difficulty, totalQuestions } from "./constants";
import AppSpinner from "./components/Spinner";
import { Box, Heading } from "@chakra-ui/react";
import AppButton from "./components/AppButton";

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

  const startQuizGame = () => {};

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
    </main>
  );
}

export default App;
