import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./services/auth/authServices"
import { login, logout } from "./store/slices/authSlice"
import { Footer, Header } from './components/index'
import { Outlet, useLocation } from 'react-router-dom'
import FooterSingle from './components/footer/FooterSingle'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      })
      .finally(() => setLoading(false))
  })

  return !loading ? (
    <div className='w-full'>
      <Header />
      <main>
        <Outlet />
      </main>
      {location.pathname === '/login' ? <FooterSingle /> :
        <Footer />}
    </div>
  ) : null
}

export default App