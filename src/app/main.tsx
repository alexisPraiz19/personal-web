// React
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// Componentes de Renderización
import Home from '../routers/Home/Home.tsx'

import "../css/index.css"// Estilos para la WEB

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)