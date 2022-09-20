import React from 'react'

const EndScreen = ({ gameScore, questionCount, allQuestionWithAnswer }) => {
    function refreshPage() {
        window.location.reload(false);
    }
    return (
        <div className="flex flex-col h-auto w-screen pb-20 sm:w-[50vh] bg-gradient-to-tr from-green-200 via-green-300 to-blue-300 px-3  border-xl">
            <div className="flex mt-10 justify-center items-center text-2xl font-bold sticky rounded border-2 py-6 border-cyan-400 mb-2 bg-white shadow-2xl top-0 z-1000 ">
                Sait oikein: {gameScore} / {questionCount}
            </div>
            {allQuestionWithAnswer?.map((list, i) => (
                <div key={i} className="flex flex-col w-full shadow-2xl bg-white rounded my-3">
                    <div
                        className={
                            list.isAnswerCorrect
                                ? "text-xl font-bold p-2 bg-emerald-400 mb-1 rounded rounded-b-none"
                                : "text-xl font-bold p-2 bg-red-400 mb-1 rounded rounded-b-none"
                        }
                    >
                        {list.isAnswerCorrect
                            ? <h3>Kysymys: {list.question} ✅</h3>
                            : <h3>Kysymys: {list.question} ❌</h3>}

                    </div>
                    <div className="p-2 text-lg font-bold my-1 rounded-xl bg-orange-400<">Oikea vastaus: {list.correctAnswer}</div>
                </div>
            ))
            }
            <div className="w-auto text-center rounded-xl text-xl font-bold py-4 bg-gray-800 cursor-pointer mt-20">
                <button onClick={refreshPage} className="uppercase w-full text-white">Uudestaan</button>
            </div>
        </div >
    )
}

export default EndScreen