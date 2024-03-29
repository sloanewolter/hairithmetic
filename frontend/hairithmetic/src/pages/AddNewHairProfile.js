import React, { useState, useEffect } from 'react';
import { Link, useParams, withRouter, useNavigate } from 'react-router-dom';
import axios from '../components/api/axiosConfig'

const AddNewHairProfile = () => {
  const [currentLength, setCurrentLength] = useState('');
  const [hairPorosity, setHairPorosity] = useState('');
  const [howOily, setHowOily] = useState('');
  const [howActive, setHowActive] = useState('');


  const handleCurrentLengthChange = (event) => {
    setCurrentLength(event.target.value);
  };

  const handleHairPorosityChange = (event) => {
    setHairPorosity(event.target.value);
  };

  const handleHowOilyChange = (event) => {
    setHowOily(event.target.value);
  };

  const handleHowActiveChange = (event) => {
    setHowActive(event.target.value);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const hairProfileData = { currentLength, hairPorosity, howOily, howActive }
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
    }
    console.log('Hair Profile Data:', hairProfileData);

    try {
      let response = await axios.post("/hairithmetic/profile", hairProfileData, {
        headers: headers
      });
        setCurrentLength('');
        setHairPorosity('');
        setHowOily('');
        setHowActive('');

          console.log('Activity submitted successfully');
        } catch (error) {
          console.error('Error during activity submission:', error);
        }
    }
      

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Current Hair Length in inches:
        <input type="text" value={currentLength} onChange={handleCurrentLengthChange} />
      </label>
      <label>
        Select Your Hair Porosity:
        <select
          value={hairPorosity}
          onChange={handleHairPorosityChange}
          autoComplete = "hairPorosity"
        >
           <option value="" disabled></option>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
      </label>
      <label>
        How Oily is your hair?:
        <select
          value={howOily}
          onChange={handleHowOilyChange}
          autoComplete = "howOily"
        
        >
           <option value="" disabled></option>
          <option value="veryDry">very dry, you can go weeks without washing</option>
          <option value="dry">dry, your hair gets oily if not washed once per week</option>
          <option value="medium">medium, you may need to wash more than once per week </option>
          <option value="oily">oily, your hair is noticeably oily after 2 days</option>
          <option value="veryOily">very oily, you have to wash your hair every day</option>
        </select>
      </label>
      <label>
        How active are you?
        <select
          value={howActive}
          onChange={handleHowActiveChange}
          autoComplete= "howActive"
        
        >
           <option value="" disabled></option>
          <option value="low">low activity level, I don't really do sweaty exercise.</option>
          <option value="medium">medium activity level, I sweat multiple times per week.</option>
          <option value="high">high activity level, I do sweaty exercise every single day.</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddNewHairProfile;