import React, { useEffect, useState } from 'react';

const Exchange = () => {
  const [rates, setRates] = useState({});
  const base = 'USD'; // Fixed base currency
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(`https://v6.exchangerate-api.com/v6/fd93eb26c8c1c0b477f3ebbe/latest/${base}`);
        const data = await response.json();

        if (data.result === 'success') {
          setRates(data.conversion_rates);
        } else {
          console.error('API Error:', data['error-type']);
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching exchange rates:', error);
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Live Exchange Rates (Base: {base})</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '2px solid #ccc' }}>
              <th style={{ padding: '8px' }}>Currency</th>
              <th style={{ padding: '8px', textAlign: 'right' }}>Rate</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(rates).map(([currency, rate]) => (
              <tr key={currency} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '8px' }}>{currency}</td>
                <td style={{ padding: '8px', textAlign: 'right' }}>{rate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Exchange;
