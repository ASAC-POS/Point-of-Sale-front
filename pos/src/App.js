import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Main from './components/main/Main';
import Login from './components/login/Login';
import About from './components/about/About';
import Employees from './components/Employees/Employees';
import Receipts from './components/Receipts/Receipts';
import Profile from './components/profile/profile';
import Products from './components/Products/ProductManage'

function App() {
  return (
    <div className='app'>
      <Header />

      <Routes>
        <Route
          exact
          path='/'
          element={
            <>
              <Main />
            </>
          }
        />
        <Route path='/signin' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/store/employees' element={<Employees />} />
        <Route path='/store/receipts' element={<Receipts />} />
        <Route path='/store/id' element={<Profile />} />
        <Route path='/products' element={<Products/>}/>

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
