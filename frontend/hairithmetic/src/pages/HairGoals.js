import React, { useState, useEffect } from 'react';
import { Link, useParams, withRouter, useNavigate, Await } from 'react-router-dom';
import axios from '../components/api/axiosConfig'


const DisplayGoals = () => {
    const [goals, setGoals] = useState([]);
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
      }

      const getGoals = async () =>{

        try 
        {
         
            const response = await axios.get("/hairithmetic/goals", {
                headers: headers
              });
      
            console.log(response.data);
        
            setGoals(response.data);
      
        }
         catch(err) 
         {
          console.log(err);
        }
      
      }
      useEffect(() => {
        getGoals();
      
      }, [])
 return (
    <div>
   <h2>Goals</h2>
   <table >
   <tr>
      <th>Frequency of Hair Washing</th>
      <th>Goal Length</th>
      <th>Improve Frizz</th>
      <th>Use More Natural Products</th>
      <th>Avoid Heat Styling</th>
      <th>Avoid Silicones</th>
      <th>Avoid Sulfates</th>

     </tr>
     {goals.map(goal =>
       <tr key={goal.id} className="activities-table-body">
         <td>{goal.frequencyOfHairWashing}</td>
          <td>{goal.goalLength}</td>
           <td>{goal.improveFrizz ? 'X' : '' }</td>
          <td>{goal.useMoreNaturalProducts ? 'X': ''}</td>
          <td>{goal.avoidHeatStyling ? 'X' : ''}</td>
           <td>{goal.avoidSilicones ? 'X' : ''}</td>
           <td>{goal.avoidSulfates ? 'X' : ''}</td>
      </tr>
       )}
   </table>
  </div>
)

  

}

export default DisplayGoals;