import React, { createContext, useState, useEffect } from 'react';
import studentData from '../data/data.json'; // Import the JSON data

const StudentContext = createContext();

function StudentProvider({ children }) {
  const [students, setStudents] = useState([]);

  // Load the students from the JSON data when the component mounts
  useEffect(() => {
    setStudents(studentData); // Set the initial state with the data from the JSON file
  }, []);

  const addStudent = (student) => {
    setStudents([...students, { ...student, id: Date.now() }]); // Ensure each student has a unique id
  };

  const updateStudent = (updatedStudent) => {
    setStudents(students.map(s => s.id === updatedStudent.id ? updatedStudent : s));
  };

  const deleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
  };

  return (
    <StudentContext.Provider value={{ students, addStudent, updateStudent, deleteStudent }}>
      {children}
    </StudentContext.Provider>
  );
}

export { StudentContext, StudentProvider };