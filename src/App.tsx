import React from 'react';
import './App.css';
import {SetCounterContainer} from "./components/setCounterBox/SetCounterContainer";
import {CounterContainer} from "./components/counterBox/CounterContainer";

function App() {

    return (
        <div className="App">
            <SetCounterContainer/>
            <CounterContainer/>
        </div>
    );
}

export default App;
