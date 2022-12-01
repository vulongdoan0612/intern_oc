import './App.css';
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Main() {
    const [result, setResult] = useState("");

    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
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
                            <span className='last-result'>abc</span>
                            <span className='method'>{result}</span>
                        </div>

                        <div className='keypad'>
                            <button onClick={handleClick}>(</button>
                            <button onClick={handleClick}>)</button>
                            <button onClick={handleClick}>%</button>
                            <button onClick={handleClick}>CE</button>
                            <button name='7' onClick={handleClick}>7</button>
                            <button name='8' onClick={handleClick}>8</button>
                            <button name='9' onClick={handleClick}>9</button>
                            <button onClick={handleClick}>&divide;</button>
                            <button name='4' onClick={handleClick}>4</button>
                            <button name='5' onClick={handleClick}>5</button>
                            <button name='6' onClick={handleClick}>6</button>
                            <button name='' onClick={handleClick}>&times;</button>
                            <button name='1' onClick={handleClick}>1</button>
                            <button name='2' onClick={handleClick}>2</button>
                            <button name='3' onClick={handleClick}>3</button>
                            <button onClick={handleClick}>&ndash;</button>
                            <button onClick={handleClick}>0</button>
                            <button onClick={handleClick}>.</button>
                            <button onClick={handleClick}>=</button>
                            <button onClick={handleClick}>+</button>
                        </div>
                    </div>

                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default Main;
