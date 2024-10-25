import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

const Dashboard = () => {
  const { students } = useContext(StudentContext);

  // Count students per class
  const classCounts = students.reduce((acc, student) => {
    acc[student.class] = (acc[student.class] || 0) + 1;
    return acc;
  }, {});

  // Prepare data for the pie chart
  const data = Object.entries(classCounts).map(([className, count]) => ({
    name: className,
    value: count,
  }));

  return (
    <div>
      <h2>Dashboard</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
      <p>Total Students: {students.length}</p>
    </div>
  );
};

export default Dashboard;