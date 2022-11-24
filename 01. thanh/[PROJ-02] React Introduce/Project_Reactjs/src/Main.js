import './App.css';
import { useState } from "react";

function Main() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const vMain = document.querySelector('.Main');
    const handleRedClick = () => {
        setCount(count + 1)
        vMain.className = "bg-red";
    }    
    const handleBlueClick = () => {
        setCount1(count1 + 1)
        vMain.className = "bg-blue";
    }  
    const handleGreenClick = () => {
        setCount2(count2 + 1)
        vMain.className = "bg-green";
    }  
    return (

        <div className="Main">
            <div className='btns'>
                <button className='red' onClick={handleRedClick}>Red</button>
                <div>Red click :{count}</div>
            </div>
            <div className='btns'>
                <button className='blue' onClick={handleBlueClick}>Blue</button>
                <div>Blue click :{count1}</div>
            </div>
            <div className='btns'>
                <button className='green' onClick={handleGreenClick}>Green</button>
                <div>Green click :{count2}</div>
            </div>
        </div>
    );
}

export default Main;
