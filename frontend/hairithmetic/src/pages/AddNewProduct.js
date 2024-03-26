import React, { useState, useEffect } from 'react';
import { Link, useParams, withRouter, useNavigate } from 'react-router-dom';
import axios from '../components/api/axiosConfig'

const AddNewProduct = () => {
  const [nameOfProduct, setNameOfProduct] = useState('');
  const [dateUsed, setDateUsed] = useState('');
  const [notes, setNotes] = useState('');
  const [willPurchaseAgain, setWillPurchaseAgain] = useState('');
  
  const handleNameOfProductChange = (event) => {
    setNameOfProduct(event.target.value);
  };

  const handleDateUsedChange = (event) => {
    const dateValue = event.target.value;
    const formattedDate = new Date(dateValue).toISOString().split('T')[0];
    setDateUsed(formattedDate);
  };


  const handleNotesChange = (event) => {
    setNotes(event.target.value);
  };

  const handleWillPurchaseAgainChange = (event) => {
    setWillPurchaseAgain(event.target.checked);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const productData = { nameOfProduct, dateUsed, notes, willPurchaseAgain }
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
    }
    console.log('Product Data:', productData);

    try {
      let response = await axios.post("/hairithmetic/products", productData, {
        headers: headers
      });
        setNameOfProduct('');
        setDateUsed('');
        setNotes('');
        setWillPurchaseAgain('');

          console.log('Activity submitted successfully');
        } catch (error) {
          console.error('Error during activity submission:', error);
        }
    }
      

  return (
    <form onSubmit={handleSubmit}>
         <label>
        Date:
        <input type="date" value={dateUsed} onChange={handleDateUsedChange} />
      </label>
      <label>
        Name of the product:
        <input type="text" value={nameOfProduct} onChange={handleNameOfProductChange} />
      </label>
      <label>
        Notes about product:
        <input type="textarea" value={notes} onChange={handleNotesChange} />
      </label>
      <label>
        Will your purchase this product again?
        <input type="checkbox" checked={willPurchaseAgain} onChange={handleWillPurchaseAgainChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddNewProduct;