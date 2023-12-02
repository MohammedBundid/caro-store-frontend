import Footer from './components/Footer'
import LandingPage from './pages/Homepage'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import './index.css'
import ProductPage from './pages/productPage'
import About from './pages/AboutPage'
import Contacts from './pages/ContactPage'
import Dashboard from './pages/AdminPage'
import AccountPage from './pages/AccountPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<LandingPage />}/>
          <Route path='/admin' element={<Dashboard />}/>
          <Route path='/products' element={<ProductPage />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contacts />}/>
          <Route path='/cart' element={<Contacts />}/>
          <Route path='/account' element={<AccountPage />}/>
        </Routes>
        <Footer />
      </BrowserRouter> 
    </>
  )
}

export default App
