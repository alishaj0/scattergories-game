import { useEffect, useState } from 'react';
import './Timer.css';


// ({Destructure}) prop passed into App.js for Timer component - in order to use in this component 
const Timer = ({ setHide }) => {
    const startingTime = 60;
    const [time, setTime] = useState(startingTime);

    // Function that begins the countdown and reveals the text/content for list items (categories.js)
    // playGame - anony arrow function to setTime to time - 1. ('time' is being updated so useEffect will run )
    const playGame = () => {
        setTime(time - 1);
        // Using 'setHide' state prop and setting it to false so that the hide classList(Categories.js) will not apply and lists will be seen WHILE playGame function runs, and will set new value for 'hide' state. ( See: useEffect to turn hide classList back on - to hide list items.)
        setHide(false);
    }

    // The useEffect function passed into the 'useEffect' hook/function runs whenever the 'time' state value is updated (includes when page first loads and valur for time is set)
    // useEffect tells React that your component needs to do something after render. React will remember the function you passed (“effect”), and call it later after performing the DOM updates. 
        // useEffect takes two items: code (effect) to be run and component the effect is placed upon.
        // useEffect will run when time is updated (component effect is used on)  
        // useEffect will run when page loads because 'time' has been updated, and then will also run when click 'Play' button (and each time that 'time' is updated) 
            // Dont want it to run when page loads - set up an if statment for useEffect to run when time is NOT equal to startingTime.
    useEffect(() => {
        // useEffect statement to run each time [time] is updated:
            // Whatever is inside this 'if' statment will run when time is NOT equal to startingTime. - (will NOT run when time = startingTime)
            // If time is NOT equal to starting time (true) - run: 
                // set a timeout at 1 sec interval, to run if time > 0, update setTime (subtract 1 from time and update "time") - time has been updated, so useEffect statement will run again until time = 0, in which 'time' will reset to startingTime.
        if(time !== startingTime) {
            // Since 'useEffect' runs everytime 'time' state value is updated, a setTimeout is used to delay the number change by one second each time the 'time' state value changes.
            setTimeout(() => {
                // Checking to if time is > 0 (time has not run out), if true, setTime will be set to time - 1. 
                if(time > 0){
                    // Updating the value for time state variable which causes the "Timer" component to re-render and also causes the useEffect function to run again
                    setTime(time - 1);
                // Code inside of the 'else' statement will run when the time = 0, and the initial if statement is false - Will update setTime back to startingTime and update setHide value to true (which will turn ON the 'hide' class - which hides the text/content of list items in 'Categories')
                } else {
                    setTime(startingTime);
                    setHide(true);
                    // Set alert to display time is up (itme = 0 && setTime is reset to startingTime). However, alert would run before timer reset. 
                    // So alert is put in another setTimeout for alert to display a tenth of a second after setTime is reset to startingTime.
                    setTimeout(() => {
                        alert('TIME IS UP!!!');
                        // After the alert is complete (the user clicks 'ok' on the alert) the list items are shown again 
                            // WHY???? Commenting out because unsure why.
                        // setHide(false);
                    }, 100);
                }
            }, 1000);
        }
    }, [time]);


    return(
        // Using component name as className
        <div className="Timer">
            <div className="Timer-Top">
                <p>TIMER</p>
                {/* Set event, onClick of button to call playGame function */}
                <button onClick={playGame} className="Timer-Top-Btn">PLAY</button>
            </div>
            <div className="Timer-Display">
                
                <h1 className="Timer-Display-H1">{time}</h1>
            </div>
        </div>
    );
}

export default Timer;