/* eslint no-eval: 0 */
const quizQuestions = (
    userSelectedOperatorsParams,
    userSelectedQuestionCount,
    userSelectedRandomRange,
) => {
    const questions = []

    const questionsCount = userSelectedQuestionCount;
    const operators = userSelectedOperatorsParams;

    for (let i = 0; i < questionsCount; i++) {

        let randomNumberOne = Math.ceil(Math.random() * userSelectedRandomRange);
        let randomNumberTwo = Math.ceil(Math.random() * userSelectedRandomRange);
        let operator = operators[Math.floor(Math.random() * operators.length)];

        let mathQuiz = randomNumberOne + operator + randomNumberTwo;

        questions.push({
            question: mathQuiz,
            answer: operator === "/" ? eval(mathQuiz).toFixed() : eval(mathQuiz),
        });
    }

    return questions;
};

export default quizQuestions