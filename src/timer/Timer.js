import './Timer.css';

const Timer = () => {
    return(
        // Using component name as className
        <div className="Timer">
            <div className="Timer-Top">
                <p>TIMER</p>
                <button className="Timer-Top-Btn">PLAY</button>
            </div>
            <div className="Timer-Display">
                <h1 className="Timer-Display-H1">60</h1>
            </div>
        </div>
    );
}

export default Timer;