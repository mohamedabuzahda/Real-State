import { Routes, useLocation } from 'react-router-dom';
import appRoutes from './route';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


const App = () => {
  const location = useLocation();
  const hideNavbar =
    location.pathname === '/login' ||
    location.pathname === '/register' ||
    location.pathname === '/order' ||
    location.pathname === '/products/:id';
  return (
    <div>
      {!hideNavbar && <Navbar />}
      <Routes>
        {appRoutes}
      </Routes>
      {!hideNavbar && <Footer />}
    </div>
  );
};

export default App;
 


