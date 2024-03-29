import React, { useState, useEffect } from 'react';
import { Link, useParams, withRouter, useNavigate, Await } from 'react-router-dom';
import axios from '../components/api/axiosConfig'


const DisplayLogs = () => {
    const [logs, setLogs] = useState([]);
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
      }

      const getLogs = async () =>{

        try 
        {
         
            const response = await axios.get("/hairithmetic/log", {
                headers: headers
              });
      
            console.log(response.data);
        
            setLogs(response.data);
      
        }
         catch(err) 
         {
          console.log(err);
        }
      
      }
      useEffect(() => {
        getLogs();
      
      }, [])
 return (
    <div>
   <h2>Hair Styling Log</h2>
   <table >
   <tr>
      <th>Date</th>
      <th>Hair Washed</th>
      <th>Products</th>
      <th>Heat Styled</th>
      <th>Used Dry Shampoo</th>
     </tr>
     {logs.map(log =>
       <tr key={log.id}>
         <td>{log.date}</td>
          <td>{log.hairWashed ? 'X' : ''}</td>
           <td>{log.products}</td>
          <td>{log.heatStyled ? 'X': ''}</td>
          <td>{log.dryShampooUsed ? 'X' : ''}</td>
      </tr>
       )}
   </table>
  </div>
)

  

}

export default DisplayLogs;