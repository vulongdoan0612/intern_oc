import { useState } from "react";

function Home() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count+1)
    }
    return (
        <div className="content">
            <div className='home'>
                Hello, đây là trang HOME
            </div>
            <div>
            <button onClick={handleClick}>Click</button> <br/>

                <label>Số lần đã click:</label><div>{count}</div>
            </div>
        </div>
    )
}


export default Home