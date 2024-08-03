import React, { useState } from 'react'

// import './style.css';

const GamePage = () => {
    const questionList = [
        {ques:"Which is the capital of India?", answer:"Delhi", options:['Mumbai', 'Delhi', 'Kolkata', "Chennai"], ans:2},
        {ques:"Who is the current Prime Minister of India ?", answer:"Narendra Modi", options:['Joe Biden', 'MSDhoni', 'Nitin Gadkari', 'Narendra Modi'], ans:4},
        {ques:"Which team won 2024 ODI World Cup ?", answer:"Australia", options:['Australia', 'Inida', 'West Indies', 'England'], ans:1},
        {ques:"Which planet has the most moons ?", answer:"Saturn", options:['Earth', 'Mars', 'Jupiter', 'Saturn'], ans:4},
        {ques:"What country has won the most World Cups in Football?", answer:"Brazil", options:['India', 'Argentina', 'Brazil', 'Germany'], ans:2},
    ]
    const [score, setScore] = useState(0)
    const [cnt, setCnt] = useState(0)
    const [showResult, setShowResult] = useState(false)
    const [selectedOption, setSelectedOption] = useState(0)
    const [Q, setQ] = useState(questionList[0])
    const handleNext = (e) => {
        e.preventDefault();
        console.log(e.target)
        setCnt((prev) => prev+1);
        setQ(questionList[cnt+1]);
        if(cnt+1 === questionList.length) {
            setShowResult(true);
        }
    }
    const handleOnChange = (e) => {
        // e.preventDefault();
        // console.log(e.target)
        
        // console.log(e.target.checked)
        setSelectedOption(e.target.value);
        if(e.target.checked === true) {
            setScore(prev => prev+1)
        }
    }

  return (
    <>  

        <h1>Quick Quiz Game</h1>
        
        { !showResult && <div style={{textAlign:'center'}}>

        <h3>{cnt+1}. {Q.ques}</h3>
        <form onSubmit={handleNext} style={{width:"100%"}}>
            <div className="options"  style={{textAlign:'justify', width:"50%", margin:"auto"}}>

            {   
                Q.options.map((option, index) => {
                    return (
                        <div key={index}>
                            <input type="radio" name="ques" id={option} value={index+1} onChange={handleOnChange}  />
                            <label htmlFor={option}>{option}</label>
                        </div>

                    )
                })
            }
            </div>
            <button type="submit" style={{margin:"5px"}}>Next</button>
        </form>    
        </div> }
        {showResult && <div>
            <h2>You Score {score} / 5</h2>
            <h3>Congratulations✨✨</h3>
        </div>}
    </>

  )
}

export default GamePage