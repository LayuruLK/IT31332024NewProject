import './App.css';
import FontSize from './components/FontSize.js';
import StudentTable from './components/StudentTable.js';
import { useState } from 'react'; 

function App() {
  const [fontSize, setFontSize] = useState('16px');



  return (
    <div className="App" style={{fontSize}}>
      <h1>Student Information Portal</h1>
      <hr></hr>
    
      <FontSize/>
      <StudentTable/>
    </div>
  );
}

export default App;
