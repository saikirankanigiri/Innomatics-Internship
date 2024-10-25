import React, { useContext, useState } from 'react';
import { StudentContext } from '../context/StudentContext';
import usePagination from '../hooks/usePagination'; // Import the hook
import { Link } from 'react-router-dom';

function StudentList() {
  const { students, deleteStudent } = useContext(StudentContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [classFilter, setClassFilter] = useState('');
  const itemsPerPage = 5; // Define how many students you want to show per page

  // Filter students based on search term and class filter
  const filteredStudents = students.filter(student => {
    return (
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (classFilter ? student.class === classFilter : true)
    );
  });

  // Use the pagination hook
  const { currentData, next, prev, currentPage, pages } = usePagination(filteredStudents, itemsPerPage);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      deleteStudent(id);
    }
  };

  return (
    <div>
      <h1>Student List</h1>
      
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Class Filter Dropdown */}
      <select onChange={(e) => setClassFilter(e.target.value)}>
        <option value="">All Classes</option>
        <option value="10th Grade">10th Grade</option>
        <option value="11th Grade">11th Grade</option>
        {/* Add more options as needed */}
      </select>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentData.length > 0 ? (
            currentData.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.class}</td>
                <td>
                  <button onClick={() => handleDelete(student.id)}>Delete</button>
                  <Link to={`/students/edit/${student.id}`}>
                    <button>Edit</button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No students found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div>
        <button onClick={prev} disabled={currentPage === 1}>Previous</button>
        <button onClick={next} disabled={currentPage === pages}>Next</button>
      </div>
    </div>
  );
}

export default StudentList;