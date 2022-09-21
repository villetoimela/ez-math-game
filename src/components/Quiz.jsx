import React, { useState, useRef, useEffect } from "react";

const Quiz = ({
    questions,
    gameScore,
    changeGameScore,
    changeGameStage,
    questionWithAnswerFunction,
}) => {
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
    const [userAnswer, setUserAnswer] = useState("");
    const inputElement = useRef();

    useEffect(() => {
        inputElement.current.focus();
    }, [currentQuestionNumber]);

    let currentQuestion = questions[currentQuestionNumber].question;
    let correctAnswer = questions[currentQuestionNumber].answer;
    let questionCount = questions.length;

    const onInputChange = (e) => {
        setUserAnswer(e.target.value);
    };

    const nextQuestion = (e) => {
        e.preventDefault();
        setUserAnswer("");
        setCurrentQuestionNumber(
            (currentQuestionNumber) => currentQuestionNumber + 1
        );
        if (correctAnswer === userAnswer || correctAnswer === null) {
            changeGameScore(1);
            questionWithAnswerFunction(currentQuestion, correctAnswer, true);
            return;
        }

        questionWithAnswerFunction(currentQuestion, correctAnswer, false);
    };

    const finishQuiz = (e) => {
        e.preventDefault();
        changeGameStage("finish");
        if (correctAnswer === userAnswer || correctAnswer === null) {
            changeGameScore(1);
            questionWithAnswerFunction(currentQuestion, correctAnswer, true);
            return;
        }

        questionWithAnswerFunction(currentQuestion, correctAnswer, false);
    };

    return (
        <div className="flex flex-col sm:w-[50vw] w-[90vw] p-8 pb-4 rounded-xl bg-gradient-to-tr from-green-200 via-green-300 to-blue-300">
            <div className="text-2xl font-bold p-2 bg-white text-center mb-3 rounded-xl">{currentQuestion}</div>
            <form
                onSubmit={
                    currentQuestionNumber + 1 === questionCount
                        ? finishQuiz
                        : nextQuestion
                }
                className="quiz-form"
            >
                <input
                    type="number"
                    ref={inputElement}
                    value={userAnswer}
                    onChange={onInputChange}
                    className="p-4 w-full box-border text-lg mb-6 rounded-xl font-bold"
                    placeholder="Kirjoita vastauksesi... 💡"
                    autoComplete="off"
                    required
                />
                <div className="flex justify-center">
                    {currentQuestionNumber + 1 === questionCount ? (
                        <button className="w-auto px-10 text-center rounded-xl font-bold py-4 bg-gray-800 text-white uppercase cursor-pointer">Tuloksiin</button>
                    ) : (
                        <button className="w-auto px-10 text-center rounded-xl font-bold py-4 bg-gray-800 text-white uppercase cursor-pointer">Seuraava ✨</button>
                    )}
                </div>
            </form>
            <div className="flex justify-between pt-6 font-bold text-cyan-800 text-xl">
                <div>{`Pisteet: ${gameScore}`}</div>
                <div>{`Kysymys: ${currentQuestionNumber + 1} / ${questionCount}`}</div>
            </div>
        </div>
    );
};

export default Quiz;