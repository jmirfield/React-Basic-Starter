import React, { useState } from 'react'
import { hot } from 'react-hot-loader';

const App = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => { setCount(count => count + 1) }}>Click Me: {count}</button>
        </div>
    )
}

export default hot(module)(App)