import React, { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Table } from 'react-bootstrap';
import axios from 'axios';

const Home = () => {
  const [amount, setAmount] = useState(100000);
  const [interest, setInterest] = useState(8.5);
  const [term, setTerm] = useState(5);
  const [emi, setEmi] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [showTable, setShowTable] = useState(false);
  const [currency, setCurrency] = useState('USD');
  const [convertedSchedule, setConvertedSchedule] = useState([]);
  const [convertedEMI, setConvertedEMI] = useState(null);
  const [currencyRates, setCurrencyRates] = useState({ USD: 1 });
  const [loadingRates, setLoadingRates] = useState(true);

  // Fetch currency rates from API
  useEffect(() => {
    const fetchRates = async () => {
      try {
        setLoadingRates(true);
        const response = await axios.get(
          'https://v6.exchangerate-api.com/v6/fd93eb26c8c1c0b477f3ebbe/latest/USD'
        );
        setCurrencyRates(response.data.conversion_rates);
        setLoadingRates(false);
      } catch (error) {
        console.error('Error fetching currency rates:', error);
        alert('Failed to fetch currency rates.');
        setLoadingRates(false);
      }
    };

    fetchRates();
  }, []);

  const calculateEMI = () => {
    const monthlyRate = interest / 12 / 100;
    const months = term * 12;
    const monthlyEMI =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
      (Math.pow(1 + monthlyRate, months) - 1);

    setEmi(monthlyEMI.toFixed(2));

    let balance = amount;
    const amortization = [];

    for (let i = 1; i <= months; i++) {
      const interestPayment = balance * monthlyRate;
      const principalPayment = monthlyEMI - interestPayment;
      balance -= principalPayment;
      amortization.push({
        month: i,
        principal: principalPayment,
        interest: interestPayment,
        balance: balance > 0 ? balance : 0,
      });
    }

    setSchedule(amortization);
    setShowTable(true);
  };

  const convertCurrency = () => {
    const rate = currencyRates[currency] || 1;
    const newSchedule = schedule.map((row) => ({
      ...row,
      principal: (row.principal * rate).toFixed(2),
      interest: (row.interest * rate).toFixed(2),
      balance: (row.balance * rate).toFixed(2),
    }));

    setConvertedSchedule(newSchedule);

    if (emi) {
      setConvertedEMI((emi * rate).toFixed(2));
    }
  };

  const resetTable = () => {
    setSchedule([]);
    setConvertedSchedule([]);
    setEmi(null);
    setConvertedEMI(null);
    setShowTable(false);
  };

  useEffect(() => {
    if (schedule.length > 0 && currencyRates) {
      convertCurrency();
    }
  }, [currency, schedule]);

  const allowedCurrencies = ['USD', 'EUR', 'INR', 'GBP', 'JPY', 'AUD', 'CAD'];

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Loan Calculator Dashboard</h2>

      <Form>
        <Row className="mb-3">
          <Col md={4}>
            <Form.Group>
              <Form.Label>Loan Amount</Form.Label>
              <Form.Control
                type="number"
                value={amount}
                onChange={(e) => setAmount(+e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Interest Rate (%)</Form.Label>
              <Form.Control
                type="number"
                value={interest}
                onChange={(e) => setInterest(+e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group>
              <Form.Label>Term (Years)</Form.Label>
              <Form.Control
                type="number"
                value={term}
                onChange={(e) => setTerm(+e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={3}>
            <Button variant="primary" className="w-100" onClick={calculateEMI}>
              CALCULATE
            </Button>
          </Col>
        </Row>
      </Form>

      {emi && (
        <div className="mb-3">
          <h5>
            Monthly EMI: <strong>${emi}</strong>
          </h5>
        </div>
      )}

      {showTable && (
        <>
          <Row className="mb-3 align-items-center">
            <Col md={3}>
              <Form.Label>Currency</Form.Label>
              <Form.Select
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                {allowedCurrencies.map((cur) => (
                  <option key={cur} value={cur}>
                    {cur}
                  </option>
                ))}
              </Form.Select>
            </Col>
            <Col md={6}>
              {convertedEMI && (
                <div className="pt-4">
                  Converted EMI: {convertedEMI} {currency}
                </div>
              )}
            </Col>
            <Col md={3} className="text-end">
              <Button variant="outline-danger" onClick={resetTable}>
                RESET TABLE
              </Button>
            </Col>
          </Row>

          <div className="table-responsive" style={{ maxHeight: '400px', overflowY: 'scroll' }}>
            <Table bordered hover>
              <thead className="table-primary">
                <tr>
                  <th>Month</th>
                  <th>Principal ({currency})</th>
                  <th>Interest ({currency})</th>
                  <th>Remaining Balance ({currency})</th>
                </tr>
              </thead>
              <tbody>
                {convertedSchedule.map((row) => (
                  <tr key={row.month}>
                    <td>{row.month}</td>
                    <td>{row.principal}</td>
                    <td>{row.interest}</td>
                    <td>{row.balance}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
