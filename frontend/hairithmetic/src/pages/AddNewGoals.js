import React, { useState, useEffect } from 'react';
import { Link, useParams, withRouter, useNavigate } from 'react-router-dom';
import axios from '../components/api/axiosConfig'

const AddNewGoals = () => {

  const [frequencyOfHairWashing, setFrequencyOfHairWashing] = useState('');
  const [goalLength, setGoalLength] = useState('');
  const [improveFrizz, setImproveFrizz] = useState('');
  const [useMoreNaturalProducts, setUseMoreNaturalProducts] = useState('');
  const [avoidHeatStyling, setAvoidHeatStyling] = useState('');
  const [avoidSilicones, setAvoidSilicones] = useState('');
  const [avoidSulfates, setAvoidSulfates] = useState('');

  

  const handlefrequencyOfHairWashingChange = (event) => {
    setFrequencyOfHairWashing(event.target.value);
  };

  const handleGoalLengthChange = (event) => {
    setGoalLength(event.target.value);
  };

  const handleImproveFrizzChange = (event) => {
    setImproveFrizz(event.target.checked);
  };

  const handleUseMoreNaturalProductsChange = (event) => {
    setUseMoreNaturalProducts(event.target.checked);
  };

  const handleAvoidHeatStylingChange = (event) => {
    setAvoidHeatStyling(event.target.checked);
  };

  const handleAvoidSiliconesChange = (event) => {
    setAvoidSilicones(event.target.checked);
  };

  const handleAvoidSulfatesChange = (event) => {
    setAvoidSulfates(event.target.checked);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const goalsData = { frequencyOfHairWashing, goalLength, improveFrizz, useMoreNaturalProducts, avoidHeatStyling, avoidSilicones, avoidSulfates }
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "Access-Control-Allow-Origin": "*",
    }
    console.log('Goals data: ', goalsData);

    try {
      let response = await axios.post("/hairithmetic/goals", goalsData, {
        headers: headers
      });
        setFrequencyOfHairWashing('');
        setGoalLength('');
        setImproveFrizz('');
        setUseMoreNaturalProducts('');
        setAvoidHeatStyling('');
        setAvoidSilicones('');
        setAvoidSulfates('');

          console.log('Activity submitted successfully');
        } catch (error) {
          console.error('Error during activity submission:', error);
        }
    }
      

  return (
    <form onSubmit={handleSubmit}>
         <label>
        How often do you want to wash your hair?
        <select
          value={frequencyOfHairWashing}
          onChange={handlefrequencyOfHairWashingChange}
          autoComplete= "frequencyOfHairWashing"
        
        >
           <option value="" disabled></option>
          <option value="oncePerTwoWeeks">Once every two weeks</option>
          <option value="oncePerWeek">Once per week</option>
          <option value="threeOrFourTimesPerWeek">Three or four times per week</option>
          <option value="everyDay">Every day</option>
        </select>
      </label>
     <label>
        Input your goal length: 
        <input type="text" value={goalLength} onChange={handleGoalLengthChange} />
      </label>
      <p>Check which goals are important to you: </p>
      <label>
        To improve frizz
        <input type="checkbox" checked={improveFrizz} onChange={handleImproveFrizzChange} />
      </label>
      <label>
        To use more natural products
        <input type="checkbox" checked={useMoreNaturalProducts} onChange={handleUseMoreNaturalProductsChange} />
      </label>
      <label>
        To avoid heat styling
        <input type="checkbox" checked={avoidHeatStyling} onChange={handleAvoidHeatStylingChange} />
      </label>
      <label>
        To avoid silicones
        <input type="checkbox" checked={avoidSilicones} onChange={handleAvoidSiliconesChange} />
      </label>
      <label>
        To avoid sulfates
        <input type="checkbox" checked={avoidSulfates} onChange={handleAvoidSulfatesChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddNewGoals;