import './App.css';
import FontSize from './components/FontSize.js';
import StudentTable from './components/StudentTable.js';
import { useState } from 'react'; 
import { students } from './StudentsDb.js';
import StudentProfile from './components/StudentProfile.js';

function App() {
  const [fontSize, setFontSize] = useState('16px');
  const [selectedStudent, setSelectedStudent] = useState(students[0])



  return (
    <>
        <div className="App" style={{ fontSize }}>
          <h1>Student Information Portal</h1>
          <hr></hr>
          <FontSize setFontSize={setFontSize}/>
          <StudentTable setSelectedStudent={setSelectedStudent}/>
          <StudentProfile student={selectedStudent}/>
        </div>

        <div>

        </div>
    </>
  );
}

export default App;
