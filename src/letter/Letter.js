import './Letter.css';

const Letter = () => {
    return(
        <div className="Letter">
            <div className="Letter-Top">
                <p>LETTER</p>
                <button className="Letter-Top-Btn">Roll Again</button>
            </div>
            <div className="Letter-Display">
                <h1 className="Letter-Display-H1">A</h1>
            </div>
        </div>
    );
}

export default Letter;