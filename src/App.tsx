import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
    const [value, setValue] = useState(0)

    useEffect(() => {

        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString){
            let newValue = JSON.parse(valueAsString)
            setValue(newValue )
        }
    }, []);

    useEffect( ()=> {
        // setValue((value:number) => {
        //     localStorage.setItem('counterValue', JSON.stringify(value))
        //     return value;
        // })

        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value] )

    const onClickHandler = () => {
        setValue(value => value+1)
    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={onClickHandler}>
                INC
            </button>
        </div>
    );
}

export default App;
