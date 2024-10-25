import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { StudentContext } from '../context/StudentContext';

function StudentDetails() {
  const { id } = useParams();
  const { students } = useContext(StudentContext);
  const student = students.find(s => s.id === parseInt(id)); // Ensure id is parsed to int

  if (!student) return <div>Student not found</div>;

  return (
    <div>
      <h1>{student.name}</h1>
      <p>Email: {student.email}</p>
      <p>Class: {student.class}</p>
      <p>Age: {student.age}</p>
      <p>Address: {student.address}</p>
      <p>Phone: {student.phone}</p>
    </div>
  );
}

export default StudentDetails;