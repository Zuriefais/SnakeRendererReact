import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import { createPortal } from 'react-dom'
import App from './App'
import 'uno.css'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'
import store from './store'
import Error404 from './pages/Error404Page'
import MainPage from './pages/MainPage'
import About from './pages/About'
import Game from './pages/Game'

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <Error404 />,
      children: [
        {
            path: "/",
            element: <MainPage />
        },
        {
            path: "/About",
            element: <About />
        },
        {
            path: "/game",
            element: <Game />
        }
      ],
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
        {createPortal(
            <title>Snake Online By Zuriefais</title>,
            document.head
        )}
    </>
    
)

