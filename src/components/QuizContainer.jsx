import React, { useState } from "react";
import StartScreen from "./StartScreen";
import Quiz from "./Quiz";
import EndScreen from "./EndScreen";
import quizQuestions from "../assets/QuizQuestions";



const QuizContainer = ({ quizName }) => {
    const [gameStage, setGameStage] = useState("start");
    const [gameScore, setGameScore] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [allQuestionWithAnswer, setAllQuestionWithAnswer] = useState([]);

    const changeGameStage = (stage) => {
        setGameStage(stage);
    };

    const onUserChoiceSubmitted = (
        e,
        stage,
        userSelectedOperators,
        userSelectedQuestionCount,
        userSelectedRandomRange
    ) => {
        e.preventDefault();
        let userSelectedOperatorsParams = userSelectedOperators
            .filter((operator) => operator.isSelected === true)
            .map((a) => a.operator);

        if (userSelectedOperatorsParams.length === 0) {
            userSelectedOperatorsParams = ["+", "-", "*", "/"];
        }

        setQuestions(
            quizQuestions(
                userSelectedOperatorsParams,
                userSelectedQuestionCount,
                userSelectedRandomRange
            )
        );

        setGameStage(stage);
    };

    const changeGameScore = (increment) => {
        setGameScore((prevGameScore) => prevGameScore + increment);
    };

    const questionWithAnswerFunction = (
        question,
        correctAnswer,
        isAnswerCorrect
    ) => {
        setAllQuestionWithAnswer([
            ...allQuestionWithAnswer,
            {
                question: question,
                correctAnswer: correctAnswer,
                isAnswerCorrect: isAnswerCorrect,
            },
        ]);
    };

    return (
        <div>
            {gameStage === "start" && (
                <StartScreen
                    quizName={quizName}
                    onUserChoiceSubmitted={onUserChoiceSubmitted}
                />
            )}
            {gameStage === "quiz" && (
                <Quiz
                    questions={questions}
                    gameScore={gameScore}
                    changeGameScore={changeGameScore}
                    changeGameStage={changeGameStage}
                    questionWithAnswerFunction={questionWithAnswerFunction}
                />
            )}
            {gameStage === "finish" && (
                <EndScreen
                    gameScore={gameScore}
                    questionCount={questions.length}
                    allQuestionWithAnswer={allQuestionWithAnswer}
                />
            )}
        </div>
    );
};


export default QuizContainer