import './App.css';
import Letter from './letter/Letter';
import Timer from './timer/Timer';
import Categories from './categories/Categories';
import { useState } from 'react';

function App() {
  const [hide, setHide] = useState(true);

  return (
    // Using component name as className on parent element
      <div className="App">
        {/* Still referencing 'parent' Parentclassname(App)-NewClassName */}
        <div className="App-Section-One">
          <Letter />
          {/* Timer needs to know the value of the 'setHide' state, so it can apply hide classList when timer is not running or stops */}
          <Timer setHide={setHide}/>
        </div>
        <div className="App-Section-Two">
          {/* setting these props for the Categories component */}
          <Categories hide={hide} setHide={setHide}/>
        </div>

      </div>
  );
}

export default App;
