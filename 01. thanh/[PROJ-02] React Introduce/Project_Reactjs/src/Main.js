import './App.css';
import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Main() {
    const [result, setResult] = useState("");
    const [result1, setResult1] = useState("");
    const [resultHistory, setResultHistory] = useState([]);
    const [state,setState] = useState({
        total: null,
        next : null,
        operation : null,
    });



    const clearClick = () => {
        setResult("");
        setResult1("");
    }

    const handleClick = (e) => {
        // setResult(result.concat(e.target.name));
        const value = e.target.name;
        if(value === "." && result.includes(".")) return;

        
        setResult(result + value);
        
 
    }

    const backspace = () => {
        setResult(result.slice(0, -1));
    }


    const calculate = () => {
        setResult1(result);
        try {
            setResult(eval(result).toString());
            const newHistory = [...resultHistory];
            newHistory.push(`${result} = ${eval(result).toString()}`);
            setResultHistory(newHistory);
            setResult1(result + " = " + eval(result).toString());
            setResult("")

        } catch (err) {
            setResult("Error")
        }


    }


    return (

        <div className="Main">
            <Tabs>
                <TabList>
                    <Tab>Calculator</Tab>
                    <Tab>History</Tab>
                </TabList>

                <TabPanel>
                    <div className='content'>
                        <div className='result'>
                            <div id="last-result" className='last-result'>{result1}</div>
                            <div className='method'>{result}</div>
                        </div>

                        <div className='keypad'>
                            <button name='(' onClick={handleClick}>(</button>
                            <button name=')' onClick={handleClick}>)</button>
                            <button onClick={clearClick}>Clear</button>
                            <button onClick={backspace}>CE</button>
                            <button name='7' onClick={handleClick}>7</button>
                            <button name='8' onClick={handleClick}>8</button>
                            <button name='9' onClick={handleClick}>9</button>
                            <button name='/' onClick={handleClick}>&divide;</button>
                            <button name='4' onClick={handleClick}>4</button>
                            <button name='5' onClick={handleClick}>5</button>
                            <button name='6' onClick={handleClick}>6</button>
                            <button name='*' onClick={handleClick}>&times;</button>
                            <button name='1' onClick={handleClick}>1</button>
                            <button name='2' onClick={handleClick}>2</button>
                            <button name='3' onClick={handleClick}>3</button>
                            <button name='-' onClick={handleClick}>&ndash;</button>
                            <button name='0' onClick={handleClick}>0</button>
                            <button name='.' onClick={handleClick}>.</button>
                            <button onClick={calculate}>=</button>
                            <button name='+' onClick={handleClick}>+</button>
                        </div>
                    </div>

                </TabPanel>
                <TabPanel>
                    <div id="history" className='history'>
                        {resultHistory.map((item) => (
                            <div>{item}</div>
                        ))}
                        </div>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default Main;
