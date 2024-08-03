import React, { useState, useEffect } from 'react'

const GamePage = () => {
    const questionList = [
        { ques: "Which is the capital of India?", answer: "Delhi", options: ['Mumbai', 'Delhi', 'Kolkata', "Chennai"], ans: 2 },
        { ques: "Who is the current Prime Minister of India ?", answer: "Narendra Modi", options: ['Joe Biden', 'MSDhoni', 'Nitin Gadkari', 'Narendra Modi'], ans: 4 },
        { ques: "Which team won 2024 ODI World Cup ?", answer: "Australia", options: ['Australia', 'Inida', 'West Indies', 'England'], ans: 1 },
        { ques: "Which planet has the most moons ?", answer: "Saturn", options: ['Earth', 'Mars', 'Jupiter', 'Saturn'], ans: 4 },
        { ques: "What country has won the most World Cups in Football?", answer: "Brazil", options: ['India', 'Argentina', 'Brazil', 'Germany'], ans: 3 },
    ]
    const [score, setScore] = useState(0)
    const [cnt, setCnt] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const [showSubmit, setShowSubmit] = useState(false)
    const [selectedOption, setSelectedOption] = useState(null)
    const [ansList, setAnsList] = useState(new Map())
    const [Q, setQ] = useState(questionList[0])

    const handleSubmit = (e) =>{
        e.preventDefault();
        setShowResult(true);
    }

    const handleNext = (e) => {
        if (cnt < questionList.length) {
            let checkAns = ansList.get(cnt + 1);
            if (checkAns == questionList[cnt].ans) {
                setScore(prev => prev + 1)
            }
            if (cnt+1 < questionList.length) {
                setCnt(prev => prev+1);
                setQ(questionList[cnt+1]);
            }
            else {
                setShowSubmit(true);
            }
        }
    }


    const handleOnChange = (e, ans) => {
        setSelectedOption(e.target.value);
        if (e.target.value == ans) {
            setAnsList(prev => new Map(prev).set(cnt + 1, e.target.value))
        }
    }

    return (
        <>

            <h1>Quick Quiz Game</h1>

            {!showResult && <div style={{ textAlign: 'center' }}>

                <h3>{cnt + 1}. {Q.ques}</h3>
                <form onSubmit={handleSubmit} style={{ width: "100%" }}>
                    <div className="options" style={{ textAlign: 'justify', width: "50%", margin: "auto" }}>

                        {
                            Q.options.map((option, index) => {
                                return (
                                    <div key={index}>
                                        <input type="radio" name="ques" id={option} value={index + 1} onChange={(event) => handleOnChange(event, Q.ans)} />
                                        <label htmlFor={option}>{option}</label>
                                    </div>

                                )
                            })
                        }
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>

                        {!showSubmit && <button type="button" onClick={handleNext} style={{ margin: "5px" }}>Next</button>}
                        {showSubmit && <button type="submit" style={{ margin: "5px" }}>Submit</button>}
                    </div>
                </form>
            </div>}
            {showResult && <div>
                <h2>You Score {score} / 5</h2>
                <h3>Congratulations✨✨</h3>
            </div>}
        </>

    )
}

export default GamePage