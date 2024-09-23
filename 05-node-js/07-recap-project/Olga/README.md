# Fullstack Vite + Node.js Project (Vanilla TypeScript)
This project is a simple fullstack application that uses Vite for the frontend with vanilla TypeScript and Node.js for the backend. It demonstrates how to set up communication between a frontend and a backend, sending requests and receiving responses, all in TypeScript.

## Project Structure
```
root/
│
├── client/                    # Frontend (Vite) project folder
│   ├── public/                # Static assets (index.html)
│   ├── src/                   # Source TypeScript files
│   │   ├── main.ts            # Entry point for frontend code
│   └── vite.config.ts         # Vite configuration file
│
├── server/                    # Backend (Node.js) project folder
│   ├── src/
│   │   ├── server.ts          # Express server setup
│   └── tsconfig.json          # TypeScript config for the backend
│
├── package.json               # Main package.json for both client and server dependencies
├── tsconfig.json              # Root TypeScript configuration file
└── README.md                  # Project documentation (this file)
```

## How It Works
### Frontend:
The frontend is served by Vite.
The main functionality of the frontend is in client/src/main.ts, which sends a fetch request to the backend to test communication.
It requests data from the backend at the /api endpoint, expecting a JSON response.
The result is logged to the console and displayed on the web page.

### Backend:
The backend is powered by Node.js and Express, located in the server/ directory.
The main server logic is in server/src/app.ts.
The backend serves an API at the /api route, responding with JSON data.

### Proxy Setup:
In vite.config.ts, we set up a proxy for the frontend so that API requests made to /api are forwarded to the backend server running on a different port.

## How to Run the Project
### Step 1: Install Dependencies
Make sure you have Node.js installed. Then, run the following commands in the root directory:

```bash
npm install
```
This will install all dependencies for both the frontend and backend.


### Step 2: Start Backend
Navigate to the server/ directory and run the following command to start the backend:

```bash
npm run dev
```
The backend will start on port 3000.

### Step 3: Start Frontend
In a separate terminal, navigate to the client/ directory and start the Vite development server:

```bash
npm run dev
```
The frontend will start on port 5173 (or another available port).

### Step 4: Test the Application
Once both servers are running, open the frontend in your browser (e.g., http://localhost:5173). You should see the page load and display a response from the backend.

## Key Files
client/src/main.ts: Sends an API request to the backend and displays the result.
server/src/app.ts: Sets up the Express server and defines a simple /api route.
vite.config.ts: Configures Vite to proxy requests to the Node.js backend.

## Technologies Used
Vite for frontend development with TypeScript.
Node.js and Express for backend.
TypeScript for type-safe development on both frontend and backend.