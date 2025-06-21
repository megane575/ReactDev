import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Router } from '../router'
import { TodoProvider } from './contexts/TodoContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodoProvider>
      <Router />
    </TodoProvider>    
  </StrictMode>,
)
