import './StudentProfile.css'

export default function StudentProfile({student}) {

    return (
        <>
            <table border={'1px'}>
               <tr>
                <td rowSpan={9} className='img'>
                    <img className="profile" 
                        src={require('../assets/profilepic/'+student.profilePic)} 
                        alt="Profile"/>
                </td>
               </tr>
               <tr>
                <td><p>ID: {student.studentId}</p></td>
               </tr>
               <tr>
                <td><p>Full Name: {student.firstName} {student.lastName}</p></td>
               </tr>
               <tr>
                <td><p>Age: {student.age}</p></td>
               </tr>
               <tr>
                <td><p>Course: {student.course}</p></td>
               </tr>
               <tr>
                <td><p>Gender: {student.gender}</p></td>
               </tr>
               <tr>
                 <td><p>Addresss: {student.address.city} {student.address.country}</p></td>
               </tr>
               <tr>
                <td><p>Skills: {student.skills.join(',' )}</p></td>
               </tr>
            </table>
        </>
    );
}