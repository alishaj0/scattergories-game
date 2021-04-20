import './App.css';
import Letter from './letter/Letter';
import Timer from './timer/Timer';
import Categories from './categories/Categories';

function App() {
  return (
    // Using component name as className on parent element
      <div className="App">
        {/* Still referencing 'parent' Parentclassname(App)-NewClassName */}
        <div className="App-Section-One">
          <Letter />
          <Timer />
        </div>
        <div className="App-Section-Two">
          <Categories />
        </div>

      </div>
  );
}

export default App;
