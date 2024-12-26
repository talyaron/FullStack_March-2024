import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

function App() {


const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;