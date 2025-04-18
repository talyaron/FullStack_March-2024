import { UserModel } from "../../../model/user/userModel";

export const registerToDB = async (userData: UserModel) => {
    try {
        const response = await fetch('http://localhost:3000/api/users/register', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        return await response.json();
    } catch (error) {
        console.error('Error setting user:', error);
        throw error;
    }
};
export interface UserModel {
    name: string;
    email: string;
    password: string;
  }

export const loginUser = async (email: string, password: string) => {
  console.log(email, password)
    const response = await fetch('http://localhost:3000/api/users/login', {
      credentials: 'include',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
  
    if (!response.ok) {
      throw new Error('Login failed');
    }
  
    return await response.json();
  };
