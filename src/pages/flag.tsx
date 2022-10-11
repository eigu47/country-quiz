import type { NextPage } from "next";
import Image from "next/image";

import QuizCard from "@/components/quiz-card/QuizCard";
import QuizChoices from "@/components/quiz-choices/QuizChoices";
import GameOverModal from "@/components/utils/GameOverModal";
import StartButton from "@/components/utils/StartButton";
import useQuiz from "@/utils/hooks/useQuiz";

const Flag: NextPage = () => {
  const {
    randomIndexes,
    autoAnimateRef,
    round,
    isTimerRunning,
    isTimeLeft,
    nextCountry,
    playAgain,
    currentCountry,
  } = useQuiz();

  return (
    <main
      ref={autoAnimateRef}
      className="container mx-auto flex h-full flex-col text-center"
    >
      <QuizCard>
        {currentCountry && (
          <Image
            src={currentCountry.flag}
            alt="Flag"
            objectFit="contain"
            layout="fill"
            priority
          />
        )}
        {round === null && <StartButton nextCountry={nextCountry} />}
      </QuizCard>
      <QuizChoices
        key={round}
        nextCountry={nextCountry}
        randomIndexes={randomIndexes}
      />
      {!isTimerRunning && !isTimeLeft && (
        <GameOverModal playAgain={playAgain} />
      )}
    </main>
  );
};

export default Flag;
