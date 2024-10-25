import { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StudentContext } from '../context/StudentContext';

function EditStudent() {
  const { id } = useParams();
  const { students, updateStudent } = useContext(StudentContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '', email: '', age: '', class: '', address: '', phone: ''
  });

  useEffect(() => {
    const student = students.find(s => s.id === parseInt(id)); // Ensure id is parsed to int
    if (student) {
      setFormData(student);
    }
  }, [id, students]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateStudent(formData);
    navigate('/students');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
      <input name="class" value={formData.class} onChange={handleChange} placeholder="Class" />
      <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
      <button type="submit">Update Student</button>
    </form>
  );
}

export default EditStudent;