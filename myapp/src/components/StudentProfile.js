export default function StudentProfile({student}) {

    return (
        <>
            <table>
               <tr>
               <img className="profile" 
                src={require('../assets/profilepic/'+student.profilePic)} 
                alt="Profile"/>
               </tr>
               <tr>
                    <p>ID: {student.studentId}</p>
               </tr>
               <tr>
                    <p>Full Name: {student.firstName} {student.lastName}</p>
               </tr>
               <tr>
                    <p>Age: {student.age}</p>
               </tr>
               <tr>
                    <p>Course: {student.course}</p>
               </tr>
               <tr>
                    <p>Gender: {student.gender}</p>
               </tr>
               <tr>
                    <p>Addresss: {student.address.city} {student.address.country}</p>
               </tr>
               <tr>
                    <p>Skills: {student.skills.join(',' )}</p>
               </tr>
            </table>
        </>
    );
}