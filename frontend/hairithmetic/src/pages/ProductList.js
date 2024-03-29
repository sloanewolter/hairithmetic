import React, { useState, useEffect } from 'react';
import { Link, useParams, withRouter, useNavigate, Await } from 'react-router-dom';
import axios from '../components/api/axiosConfig'


const DisplayProducts= () => {
    const [products, setProducts] = useState([]);
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
      }

      const getProducts = async () =>{

        try 
        {
         
            const response = await axios.get("/hairithmetic/products", {
                headers: headers
              });
      
            console.log(response.data);
        
            setProducts(response.data);
      
        }
         catch(err) 
         {
          console.log(err);
        }
      
      }
      useEffect(() => {
        getProducts();
      
      }, [])
 return (
    <div>
   <h2>Product List</h2>
   <table >
   <tr>
      <th>Name of Product</th>
      <th>Date Used</th>
      <th>Notes</th>
      <th>Purchase Again?</th>

     </tr>
     {products.map(product =>
       <tr key={product.id}>
         <td>{product.nameOfProduct}</td>
          <td>{product.dateUsed}</td>
          <td>{product.notes}</td>
           <td>{product.willPurchaseAgain ? 'X' : '' }</td>
      </tr>
       )}
   </table>
  </div>
)

  

}

export default DisplayProducts;