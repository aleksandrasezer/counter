import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";
import {Setcounter} from "./components/Setcounter";

function App() {
    const [num, setNum] = useState(0)
    const [maxValue, setMaxValue] = useState(10)
    const [minValue, setMinValue] = useState(0)
    const [isValueSet, setIsValueSet] = useState(false)

    useEffect(() => {
        let maxValueStr = localStorage.getItem('max value')
        if (maxValueStr) {
            let maxValueNum = JSON.parse(maxValueStr)
            setMaxValue(maxValueNum)
        }
    }, [])

    useEffect(() => {
        let minValueStr = localStorage.getItem('min value')
        if (minValueStr) {
            let minValueNum = JSON.parse(minValueStr)
            setMinValue(minValueNum)
        }
    }, [])

    const incrementF = () => setNum(num + 1)

    const resetF = () => setNum(minValue)

    const maxValueChanged = (currentValue: number) => setMaxValue(currentValue)

    const minValueChanged = (currentValue: number) => setMinValue(currentValue)

    const setValues = () => {
        setNum(minValue)
        setIsValueSet(true)
        localStorage.setItem('max value', JSON.stringify(maxValue))
        localStorage.setItem('min value', JSON.stringify(minValue))
    }



    return (
        <div className="App">
            <Setcounter maxValueChanged={maxValueChanged}
                        minValueChanged={minValueChanged}
                        maxValue={maxValue}
                        minValue={minValue}
                        setValues={setValues}/>
            <Counter num={num}
                     maxValue={maxValue}
                     minValue={minValue}
                     incrementF={incrementF}
                     resetF={resetF}
                     isValueSet={isValueSet}/>

        </div>
    );
}

export default App;
