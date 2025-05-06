import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.classList.add('d-none');
    }
    return () => {
      if (navbar) {
        navbar.classList.remove('d-none');
      }
    };
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <div className="text-center">
        <h1 className="text-dark">Something went wrong in the application.</h1>
        <Link to="/" className="btn btn-primary mt-4" style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}>
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
