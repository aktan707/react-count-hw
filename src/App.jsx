
import {useState} from "react";
import Button from "./Button.jsx";
import "./App.css"
import "./button.css"
const App = () => {
    // let number = 0;
    const [number, setNumber] =useState(0);

    function increment() {
        // number++;
        setNumber(number + 1);
        // setNumber(number - 1);
        // console.log(number);
    }
    function minus () {
        if (number === 0) {
            return;
        }
        setNumber(number - 1);
    }

    const promptFn = () => {
        const num = prompt("Enter your number");
        console.log(Number(num));
        setNumber(Number(num));

    }

    return (
        <div className='counter container'>
            <h1>Counter App</h1>
            {/*<button onClick={minus}>-</button>*/}
            <button className='count-btn1' onClick={increment}>+</button>
            <span>{number}</span>
            <Button text={"-"} onClick={minus}/>
            <br/>
            <button className='count-btn3' onClick={promptFn}> prompt</button>

        </div>
    );
};
export default App;