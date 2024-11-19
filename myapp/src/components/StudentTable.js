import { students } from '../StudentsDb';

export default function StudentTable() {
    return(
        <>
            <table border={'1px'}>
                <tr>
                  <td>First Name</td>
                  <td>Last Name</td>  
                  <td>Course</td>  
                  <td>Country</td>
                  <td>Profile</td>  
                </tr>
          
                    {students.map((student)=>(
                        <tr key={student.studentId}>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.course}</td>
                            <td>{student.address.country}</td>
                            <td><button>View Profile</button></td>
                        </tr>
                    ))}
                
            </table>
        </>
    );
}