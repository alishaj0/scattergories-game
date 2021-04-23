import './Letter.css';
import { useState } from 'react';

const Letter = () => {
    // Using useState and destructuring to what it returns (array with two items [name, setName] = useState(starting value for name) - 'setName' is updated value for 'name')
    const [index, setIndex] = useState(0);
      
    // 'letters' array
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    // Setting randomIndex function (inside changeLetter function), to choose a random number from the length of the letters string and set to value of 'setIndex' each time function is run - setIndex(randomIndex)
    // set onClick on button (in return) to run changeLetter function upon each click
    // set text inside h1 as the value of index as it corresponds to the letters string
    const changeLetter = () => {
        const randomIndex = Math.floor(Math.random() * letters.length);
        setIndex(randomIndex);
    }

    return(
        <div className="Letter">
            <div className="Letter-Top">
                <p>LETTER</p>
                <button
                onClick={changeLetter}
                className="Letter-Top-Btn"
                >Roll Again</button>
            </div>
            <div className="Letter-Display">
                <h1 className="Letter-Display-H1">
                    {/* re-renders letter component with new value being plugged in for index */}
                    {letters[index]}
                </h1>
            </div>
        </div>
    );
}

export default Letter;