import './App.css';
import StudentTable from './components/StudentTable.js';
import { students } from './StudentsDb.js';

function App() {
  return (
    <div className="App">
     <h1>Student Information Portal</h1>
     <StudentTable/>
    </div>
  );
}

export default App;
