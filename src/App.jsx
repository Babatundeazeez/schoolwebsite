
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBarSection from './Components/NavBarSection'
import Home from './Pages/Home'
import AuthProvider from './Context/AuthContext'
import AcademyProgramme from './Pages/AcademyProgramme'
import AdmissionPage from './Pages/AdmissionPage'
import About from './Pages/About'
import ContactUsPage from './Pages/ContactUsPage'
import NavBar2section from './Components/NavBar2section'
import Sidebar from './Components/Sidebar'
import StudentDashBard from './Pages/Dashboard/StudentDashBard'
import AdminDashBoard from './Pages/Dashboard/AdminDashBoard'
import Teacher from './Pages/Teacher'
import FooterSection from './Components/FooterSection'
// import Layout from './Components/Layout'

function App() {
  

  return (
    <>
   <BrowserRouter>
   <AuthProvider>
   
    
    <div className='pt-7 '>
    
    <NavBarSection />
    <NavBar2section />
    <Routes>
    
    
        <Route path='/' element ={<Sidebar />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element ={<About />} />
        <Route path='/academy' element ={<AcademyProgramme />} />
        <Route path='/admision' element = {<AdmissionPage />} />
        <Route path='/contact' element = {<ContactUsPage />} />
        <Route path='/student' element = {<StudentDashBard />} />
        <Route path='/administration' element = {<AdminDashBoard />} />
        <Route path='/teacher' element = {<Teacher />} />
        </Route>
        
    </Routes>

   
    
    </div>
   
   
      <FooterSection />
   </AuthProvider>
   </BrowserRouter>
    </>
  )
}

export default App
