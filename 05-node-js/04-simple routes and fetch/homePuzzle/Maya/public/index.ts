import fetch from 'node-fetch'; // Use node-fetch or axios for requests

const API_URL = 'http://localhost:3000/api';

// Fetch all todos
export const getTodos = async () => {
  try {
    const response = await fetch(`${API_URL}/get-todos`);
    const todos = await response.json();
    console.log('Todos:', todos);
    return todos;
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
};

// Add a new todo
export const addTodo = async (title: string) => {
  try {
    const response = await fetch(`${API_URL}/add-todo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error adding todo:', errorData);
      return;
    }

    const newTodo = await response.json();
    console.log('Added Todo:', newTodo);
  } catch (error) {
    console.error('Error adding todo:', error);
  }
};

const runTest = async () => {
  console.log('Fetching initial todos...');
  await getTodos();

  console.log('Adding a new todo...');
  await addTodo('Learn TypeScript');

  console.log('Fetching updated todos...');
  await getTodos();
};

runTest();
