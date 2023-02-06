import './App.css';
import Search from './Search';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
    return (
      <div className="App">
        <h1>Weather Search Engine</h1>
        <Search />
        <a href = "https://github.com/O-l-i-a/weather-react" alt = "Link to Code">
          Open Source Code on GitHub
        </a>
      </div>
    );
}

export default App;
