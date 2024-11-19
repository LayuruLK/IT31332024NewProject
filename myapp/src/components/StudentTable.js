import { students } from '../StudentsDb';
import './StudentTable.css'

export default function StudentTable({setSelectedStudent}) {
    return(
        <div>
            <table border={'1px'}>
                <tr>
                  <th className='fn'>First Name</th>
                  <th className='ln'>Last Name</th>  
                  <th className='c'>Course</th>  
                  <th>Country</th>
                  <th>Profile</th>  
                </tr>
          
                    {students.map((student)=>(
                        <tr key={student.studentId}>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.course}</td>
                            <td>{student.address.country}</td>
                            <td><button onClick={() => setSelectedStudent(student)}>View</button></td>
                        </tr>
                    ))}
                
            </table>
        </div>
    );
}