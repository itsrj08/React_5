import React from 'react'
import { useState, useEffect } from 'react'

function Calculator() {

    const [preState, setPreState] = useState(" ")
    const [curState, setCurState] = useState(" ")
    const [input, setInput] = useState("0")
    const [operator, setOperator] = useState(null)
    const [total, setTotal] = useState(false)

    const inputNum = e => {
        // if(curState.includes(".") && e.target.innerText === ".") return{
        //     if(total){
        //         setPreState("")
        //     }
        // }
    }

    const operatorType = e => {

    }

    const equals = e => {

    }

    const minusPlus = () => {

    }

    const percent = () => {

    }

    const reset = () => {

    }

    return (
        <div className="container">
            <div className="wrapper">
                <div className="screen">{input}</div>
                <div className="btn light-gray" onClick={() => reset()}>AC</div>
                <div className='btn light-gray' onClick={() => percent()}>%</div>
                <div className='btn light-gray' onClick={() => minusPlus()}>+/-</div>
                <div className="btn orange" onClick={() => operatorType()}>/</div>
                <div className="btn" onClick={() => inputNum()}>7</div>
                <div className="btn" onClick={() => inputNum()}>8</div>
                <div className="btn" onClick={() => inputNum()}>9</div>
                <div className="btn orange" onClick={() => operatorType()}>x</div>
                <div className="btn" onClick={() => inputNum()}>4</div>
                <div className="btn" onClick={() => inputNum()}>5</div>
                <div className="btn" onClick={() => inputNum()}>6</div>
                <div className="btn orange" onClick={() => operatorType()}>+</div>
                <div className="btn" onClick={() => inputNum()}>1</div>
                <div className="btn" onClick={() => inputNum()}>2</div>
                <div className="btn" onClick={() => inputNum()}>3</div>
                <div className="btn orange" onClick={() => operatorType()}>-</div>
                <div className="btn zero" onClick={() => inputNum()}>0</div>
                <div className="btn" onClick={() => inputNum()}>.</div>
                <div className="btn" onClick={() => equals()}>=</div>
            </div>
        </div>
    )
}

export default Calculator
