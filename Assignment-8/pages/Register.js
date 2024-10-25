import { useContext, useState } from 'react';
import { StudentContext } from '../context/StudentContext';

function Register() {
  const { addStudent } = useContext(StudentContext);
  const [formData, setFormData] = useState({
    name: '', email: '', age: '', class: '', address: '', phone: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent({ ...formData, id: Date.now() }); // Add id on registration
    setFormData({
      name: '', email: '', age: '', class: '', address: '', phone: ''
    }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
      <input name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
      <input name="class" value={formData.class} onChange={handleChange} placeholder="Class" />
      <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
      <button type="submit">Register Student</button>
    </form>
  );
}

export default Register;