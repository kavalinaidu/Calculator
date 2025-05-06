import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // ✅ Important for showing icons
import React from 'react';

const ABOUT = () => {
  const renderList = (items) =>
    items.map((text, i) => (
      <li key={i} className="mb-2">{text}</li>
    ));

  return (
    <div className="container mt-4">
      {/* About Section */}
      <h2 className="mb-3">
        <i className="bi bi-rocket-fill me-2 text-danger" />
        About This App
      </h2>
      <p>
        This Loan Calculator App is a modern, single-page web application built using{' '}
        <strong>React JS</strong> and <strong>Bootstrap</strong>. It allows users to calculate
        loan EMIs, view an amortization schedule, and see real-time currency conversions.
      </p>

      {/* Instructions */}
      <h4 className="mt-4">
        <i className="bi bi-journal-check me-2 text-warning" />
        Instructions for Candidates
      </h4>
      <ul>
        {renderList([
          'Push the project to a public GitHub repository.',
          'Commit regularly with clear messages.',
          'Use the provided EMI formula for calculations.',
          'Use Context API for global state management.',
          'Create custom React hooks for reusable logic.',
          'Integrate the ExchangeRate API for live currency conversion.',
          'Ensure full responsiveness on all screen sizes.',
          'Implement dark and light themes.',
          'Add a 404 Not Found page for unmatched routes.',
          'Handle errors with a fallback Error Page.',
          'Add the live demo link in your GitHub repo.',
          'Deploy using platforms like Vercel or Netlify.'
        ])}
      </ul>

      {/* Features */}
      <h4 className="mt-4">
        <i className="bi bi-wrench me-2 text-success" />
        Features
      </h4>
      <ul>
        {renderList([
          'Loan EMI calculation using the standard financial formula.',
          'Dynamic amortization schedule table with monthly breakdown.',
          'Real-time currency conversion using live exchange rates.',
          'Paginated exchange-rate table for 160+ currencies.',
          'Dark/Light mode toggle.',
          'Mobile-friendly collapsible header navigation.',
          'Fully responsive design.'
        ])}
      </ul>

      {/* Technologies */}
      <h4 className="mt-4">
        <i className="bi bi-box me-2 text-info" />
        Technologies Used
      </h4>
      <ul>
        {renderList([
          'React (Hooks, Routing, Context API).',
          'Bootstrap 5 for UI styling.',
          'Axios for HTTP requests.',
          'ExchangeRate‑API for live currency data.'
        ])}
      </ul>

      {/* EMI Formula */}
      <h4 className="mt-4">
        <i className="bi bi-calculator me-2 text-secondary" />
        EMI Formula Used
      </h4>
      <p className="bg-light p-3">
        <code>
          EMI = [P × R × (1 + R)<sup>N</sup>] / [(1 + R)<sup>N</sup> – 1]
        </code>
      </p>
      <p>
        Where:<br />
        <strong>P</strong> = Principal loan amount<br />
        <strong>R</strong> = Monthly interest rate (annual rate ÷ 12 ÷ 100)<br />
        <strong>N</strong> = Loan duration in months
      </p>

      {/* Currency API */}
      <h4 className="mt-4">
        <i className="bi bi-globe2 me-2 text-primary" />
        Currency Conversion API
      </h4>
      <p>
        This app integrates with the free tier of the{' '}
        <a href="https://www.exchangerate-api.com" target="_blank" rel="noreferrer">
          ExchangeRate‑API
        </a>{' '}
        to fetch live exchange rates.
      </p>
      <code className="d-block bg-light p-2 mb-3">
        https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD
      </code>
      <p>Replace <strong>YOUR_API_KEY</strong> with your actual API key.</p>

      {/* Purpose */}
      <h4 className="mt-4">
        <i className="bi bi-bullseye me-2 text-danger" />
        Purpose of This App
      </h4>
      <ul>
        {renderList([
          'Demonstrate React fundamentals: state, props, hooks.',
          'Build reusable component structure.',
          'Integrate third-party APIs and render live data.',
          'Display data in tables, lists, and pagination.',
          'Implement theme toggling (dark/light mode).',
          'Handle runtime errors with fallback UI.',
          'Ensure a responsive, mobile-friendly interface.'
        ])}
      </ul>
    </div>
  );
};

export default ABOUT;
