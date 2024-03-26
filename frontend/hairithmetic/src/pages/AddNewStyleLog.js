import React, { useState, useEffect } from 'react';
import { Link, useParams, withRouter, useNavigate } from 'react-router-dom';
import axios from '../components/api/axiosConfig'

const AddNewStyleLog = () => {

  const [date, setDate] = useState('');
  const [hairWashed, setHairWashed] = useState('');
  const [products, setProducts] = useState('');
  const [heatStyled, setHeatStyled] = useState('');
  const [dryShampooUsed, setDryShampooUsed] = useState('');

  

  const handleDateChange = (event) => {
    const dateValue = event.target.value;
    const formattedDate = new Date(dateValue).toISOString().split('T')[0];
    setDate(formattedDate);
  };

  const handleHairWashedChange = (event) => {
    setHairWashed(event.target.checked);
  };

  const handleProductsChange = (event) => {
    setProducts(event.target.value);
  };

  const handleHeatStyledChange = (event) => {
    setHeatStyled(event.target.checked);
  };

  const handleDryShampooUsedChange = (event) => {
    setDryShampooUsed(event.target.checked);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const styleLogData = { date, hairWashed, products, heatStyled, dryShampooUsed }
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
    }
    console.log('Style Log Data:', styleLogData);

    try {
      let response = await axios.post("/hairithmetic/log", styleLogData, {
        headers: headers
      });
        setDate('');
        setHairWashed('');
        setProducts('');
        setHeatStyled('');
        setDryShampooUsed('');

          console.log('Activity submitted successfully');
        } catch (error) {
          console.error('Error during activity submission:', error);
        }
    }
      

  return (
    <form onSubmit={handleSubmit}>
     <label>
        Date:
        <input type="date" value={date} onChange={handleDateChange} />
      </label>
      <label>
        Hair Washed? 
        <input type="checkbox" checked={hairWashed} onChange={handleHairWashedChange} />
      </label>
      <label>
        Products Used?
        <input type="text" value={products} onChange={handleProductsChange} />
      </label>
      <label>
        Heat styled? 
        <input type="checkbox" checked={heatStyled} onChange={handleHeatStyledChange} />
      </label>
      <label>
        Dry Shampoo Used?
        <input type="checkbox" checked={dryShampooUsed} onChange={handleDryShampooUsedChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddNewStyleLog;