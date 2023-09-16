// Import necessary React libraries and components
import React from 'react'; // Import React library
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering
import './index.css'; // Import CSS styles
import App from './App'; // Import the main App component
import reportWebVitals from './reportWebVitals'; // Import web vitals reporting function

// Create a React root using ReactDOM.createRoot() and specify the root element by its ID
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the main App component inside a React.StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Report web vitals (performance metrics) for the application
reportWebVitals();
