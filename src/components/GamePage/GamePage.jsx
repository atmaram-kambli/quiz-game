import React, { useState } from 'react';

const GamePage = () => {
    const questionList = [
        { ques: "Which is the capital of India?", answer: "Delhi", options: ['Mumbai', 'Delhi', 'Kolkata', "Chennai"], ans: 2 },
        { ques: "Who is the current Prime Minister of India ?", answer: "Narendra Modi", options: ['Joe Biden', 'MSDhoni', 'Nitin Gadkari', 'Narendra Modi'], ans: 4 },
        { ques: "Which team won 2024 ODI World Cup ?", answer: "Australia", options: ['Australia', 'Inida', 'West Indies', 'England'], ans: 1 },
        { ques: "Which planet has the most moons ?", answer: "Saturn", options: ['Earth', 'Mars', 'Jupiter', 'Saturn'], ans: 4 },
        { ques: "What country has won the most World Cups in Football?", answer: "Brazil", options: ['India', 'Argentina', 'Brazil', 'Germany'], ans: 3 }, // Changed ans to 3 to match 'Brazil'
    ];

    const [score, setScore] = useState(0);
    const [cnt, setCnt] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [selectedOption, setSelectedOption] = useState(0);
    const [ansList, setAnsList] = useState(new Map());
    const [Q, setQ] = useState(questionList[0]);

    const handleNext = (e) => {
        e.preventDefault();
        const currentAnswer = ansList.get(cnt + 1);

        // Calculate score only if the answer is correct
        if (currentAnswer == Q.ans) {
            setScore(prev => prev + 1);
        }

        // Move to the next question
        setCnt(prev => {
            const nextCnt = prev + 1;
            if (nextCnt < questionList.length) {
                setQ(questionList[nextCnt]);
            } else {
                setShowResult(true);
            }
            return nextCnt;
        });
    };

    const handleOnChange = (index, e) => {
        setSelectedOption(index + 1);
        setAnsList(prev => new Map(prev).set(cnt + 1, index + 1));
    };

    return (
        <>
            <h1>Quick Quiz Game</h1>

            {!showResult && (
                <div style={{ textAlign: 'center' }}>
                    <h3>{cnt + 1}. {Q.ques}</h3>
                    <form onSubmit={handleNext} style={{ width: "100%" }}>
                        <div className="options" style={{ textAlign: 'justify', width: "50%", margin: "auto" }}>
                            {Q.options.map((option, index) => (
                                <div key={index}>
                                    <input
                                        type="radio"
                                        name="ques"
                                        id={option}
                                        value={index + 1}
                                        checked={selectedOption === index + 1}
                                        onChange={(event) => handleOnChange(index, event)}
                                    />
                                    <label htmlFor={option}>{option}</label>
                                </div>
                            ))}
                        </div>
                        <button type="submit" style={{ margin: "5px" }}>Next</button>
                    </form>
                </div>
            )}

            {showResult && (
                <div>
                    <h2>Your Score: {score} / {questionList.length}</h2>
                    <h3>Congratulations✨✨</h3>
                </div>
            )}
        </>
    );
};

export default GamePage;
