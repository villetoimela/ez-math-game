import React from "react"
import { useState } from "react"

const StartScreen = ({ onUserChoiceSubmitted }) => {

    const [userSelectedQuestionCount, setUserSelectedQuestionCount] = useState(10);
    const [userSelectedRandomRange, setUserSelectedRandomRange] = useState(10)
    const [userSelectedOperators, setUserSelectedOperators] = useState([
        {
            operator: "+",
            isSelected: false,
        },
        {
            operator: "-",
            isSelected: false,
        },

        {
            operator: "*",
            isSelected: false,
        },

        {
            operator: "/",
            isSelected: false,
        },
    ]);

    const questionCountOptions = [5, 10, 15, 20];
    const randomNumberRanges = [10, 20, 30, 40];

    const onSelectOperators = (e, position) => {
        let isOperatorAlreadySelected = userSelectedOperators.map(
            (operator, index) => {
                if (index === position) {
                    return { ...operator, isSelected: e.target.checked };
                }
                return operator;
            }
        );
        setUserSelectedOperators(isOperatorAlreadySelected);
    }

    const onSelectQuestionCount = (e) => {
        setUserSelectedQuestionCount(e.target.value);
    };

    const onSelectRandomNumberRange = (e) => {
        setUserSelectedRandomRange(e.tager.value);
    };

    return (
        <div className="flex flex-col min-h-screen py-8 md:px-14 px-6 md:rounded-xl bg-gradient-to-tr from-green-200 via-green-300 to-blue-300">
            <div className="flex justify-center items-center text-black text-4xl font-bold my-6 pb-10">Hei siellä! 🎉</div>
            <form
                onSubmit={(e) =>
                    onUserChoiceSubmitted(
                        e,
                        "quiz",
                        userSelectedOperators,
                        userSelectedQuestionCount,
                        userSelectedRandomRange,
                    )
                }
                className="flex flex-col justify-center">

                <div className="flex text-xl font-bold">
                    Mitä laskuja haluat harjoitella? 👀
                </div>
                <div className="flex flex-col justify-center py-2">
                    {userSelectedOperators.map((operator, index) => (
                        <div key={index} className="flex items-center text-xl mb-4">
                            <input
                                className="h-6 w-6 text-center"
                                name="select-operator"
                                type="checkbox"
                                value={operator.operator}
                                onChange={(e) => onSelectOperators(e, index)}
                            />
                            <label className="font-bold text-2xl pl-2">{operator.operator}</label>
                        </div>
                    ))}
                </div>
                <div className="flex text-xl font-bold">
                    Kuinka monta laskua kysytään? 🤔
                </div>
                <div className="flex flex-row w-full items-center py-2">
                    {questionCountOptions.map((questionCountOption, index) => (
                        <div key={index} className="flex items-center text-lg mb-4">
                            <input
                                className="h-6 w-6 text-center"
                                name="select-question-count"
                                type="radio"
                                value={questionCountOption}
                                onChange={onSelectQuestionCount}
                            />
                            <label className="font-bold text-sm sm:text-lg pl-1 pr-6">{questionCountOption}</label>
                        </div>
                    ))}
                </div>
                <div className="flex text-xl font-bold">
                    Valitse miltä väliltä haluat laskujen olevan! 🎈
                </div>
                <div className="flex flex-row pb-14 w-full items-center py-2">
                    {randomNumberRanges.map((randomNumberRange, index) => (
                        <div key={index} className="flex items-center text-lg mb-4">
                            <input
                                className="h-6 w-6 text-center"
                                name="select-number-range"
                                type="radio"
                                value={randomNumberRange}
                                onChange={onSelectRandomNumberRange}
                            />
                            <label className="font-bold text-sm sm:text-lg pl-1 pr-4 sm:pr-6"> {`1-${randomNumberRange}`}</label>
                        </div>
                    ))}
                </div>
                <div className="w-auto text-center rounded-xl text-xl font-bold py-4 bg-gray-800 cursor-pointer">
                    <button className="uppercase w-full text-white">Aloita</button>
                </div>
            </form>
        </div >
    );
};

export default StartScreen