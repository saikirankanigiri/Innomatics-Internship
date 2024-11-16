const axios = require('axios');

const API_URL = 'http://localhost:3000/todos';  // Replace with your API URL

// Test POST /todos (Create a new to-do)
const createTodo = async () => {
  try {
    const response = await axios.post(API_URL, {
      title: 'Buy groceries',
      description: 'Milk, Eggs, Bread'
    });
    console.log('POST /todos Response:', response.data);
    return response.data._id;  // Return the newly created Todo's ID for future tests
  } catch (error) {
    console.error('Error in POST /todos:', error.response?.data || error.message);
  }
};

// Test GET /todos (Get all to-dos)
const getTodos = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log('GET /todos Response:', response.data);
  } catch (error) {
    console.error('Error in GET /todos:', error.response?.data || error.message);
  }
};

// Test GET /todos/:id (Get a specific to-do by ID)
const getTodoById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    console.log('GET /todos/:id Response:', response.data);
  } catch (error) {
    console.error('Error in GET /todos/:id:', error.response?.data || error.message);
  }
};

// Test PUT /todos/:id (Update a to-do by ID)
const updateTodoById = async (id) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, {
      title: 'Updated Title',
      description: 'Updated Description',
      completed: true
    });
    console.log('PUT /todos/:id Response:', response.data);
  } catch (error) {
    console.error('Error in PUT /todos/:id:', error.response?.data || error.message);
  }
};

// Test DELETE /todos/:id (Delete a to-do by ID)
const deleteTodoById = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    console.log('DELETE /todos/:id Response:', response.data);
  } catch (error) {
    console.error('Error in DELETE /todos/:id:', error.response?.data || error.message);
  }
};

// Execute Tests (call functions as needed)
const testTodoApi = async () => {
  // Create a new to-do and get the ID for future tests
  const newTodoId = await createTodo(); 

  // Retrieve all to-dos
  await getTodos();

  // Retrieve a specific to-do by ID (using the newTodoId)
  if (newTodoId) {
    await getTodoById(newTodoId); 

    // Update the to-do by ID
    await updateTodoById(newTodoId); 

    // Delete the to-do by ID
    await deleteTodoById(newTodoId); 
  }
};

// Run the test
testTodoApi();
