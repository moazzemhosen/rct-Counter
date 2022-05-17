
import './App.css';
import { Counter } from './components/Counter';

function App() {

  return (
    <div className="App">
      <Counter init={10}/>
    </div>
  );
}

export default App;
