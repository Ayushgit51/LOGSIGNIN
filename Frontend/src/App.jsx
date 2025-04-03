import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/Home'; // Adjust if this should be HomePage
import Navbar from './Navbar';
import Login from './Auth/Login';
import SignupPage from './Auth/SignupPage';

const App = () => {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} /> {/* Changed to Home */}
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="*" element={<h2 className="text-center mt-10">404 - Page Not Found</h2>} />
            </Routes>
          </main>
        </div>
      </Router>
    </>
  );
};

export default App;