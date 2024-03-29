import React, { useState, useEffect } from 'react';
import { Link, useParams, withRouter, useNavigate, Await } from 'react-router-dom';
import axios from '../components/api/axiosConfig'


const DisplayProfiles = () => {
    const [profiles, setProfiles] = useState([]);
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
      }

      const getProfiles = async () =>{

        try 
        {
         
            const response = await axios.get("/hairithmetic/profile", {
                headers: headers
              });
      
            console.log(response.data);
        
            setProfiles(response.data);
      
        }
         catch(err) 
         {
          console.log(err);
        }
      
      }
      useEffect(() => {
        getProfiles();
      
      }, [])
 return (
    <div>
   <h2>Profile</h2>

     {profiles.map(profile =>
       < div key={profile.id}>
         <p>Current Length: {profile.currentLength}</p>
         <p>Hair Porosity: {profile.hairPorosity}</p>
         <p>Oiliness: {profile.howOily}</p>
         <p>Activity Level: {profile.howActive}</p>
      </div>
       )};
       </div>
)
 

}

export default DisplayProfiles;