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
        <h1>Student Information Portal</h1>
        <hr></hr>
        <FontSize setFontSize={setFontSize}/>
        <hr></hr>
      <div className='outerDiv' style={{ fontSize }}>
          <div className="leftDiv" >
            <StudentTable setSelectedStudent={setSelectedStudent}/>       
          </div>

          <div className='rightDiv'>
            <StudentProfile student={selectedStudent}/>
          </div>
      </div>
    </>
  );
}

export default App;
