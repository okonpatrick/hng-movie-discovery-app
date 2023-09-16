// Import necessary styles and components
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import styles for toast notifications
import MovieDetails from './pages/MovieDetails';

// Define the main App component
function App() {
  return (
    <div className="App">
      {/* Set up React Router for navigation */}
      <Router>
        <Routes>
          {/* Define a route for the HomePage component */}
          <Route path="/" element={<HomePage />} />
          {/* Define a route for the MovieDetails component */}
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
      {/* Add a ToastContainer for displaying toast notifications */}
      <ToastContainer />
    </div>
  );
}

// Export the App component as the default export
export default App;
