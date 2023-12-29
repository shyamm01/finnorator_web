import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store.js'
import Signup from './pages/Signup.jsx'
import Login from './pages/Login.jsx'
import LandingPage from './components/landingpage/LandingPage.jsx'
import EmailVerification from './components/screens/EmailVerification.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path='' element={<LandingPage />}/>
      <Route path='login' element={<Login />}/>
      <Route path='signup' element={<Signup />} />
      <Route path='email-verification' element={<EmailVerification />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
