import './App.css';
import StudentTable from './components/StudentTable.js';
import { useState } from 'react'; 

function App() {
  const [fontSize, setFontSize] = useState('16px');



  return (
    <div className="App" style={{fontSize}}>
     <h1>Student Information Portal</h1>
     
     <button onClick={() => setFontSize('8px')}>S</button>
     <button onClick={() => setFontSize('16px')}>M</button>
     <button onClick={() => setFontSize('24px')}>L</button>
     
     <StudentTable/>
    </div>
  );
}

export default App;
