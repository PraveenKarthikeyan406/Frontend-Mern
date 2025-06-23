// Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios'; 

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setUsers(response.data); 
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Dashboard - User List</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
       <ul>
        {users.map((product) => (
          <li key={product.id}>
            <strong>{product.title}</strong> - ₹{product.price} <br />
            {product.description} <br />
            <em>Category:</em> {product.category} <br />
            <img src={product.image} alt={product.title} width="100" /><br />
            ⭐ Rating: {product.rating.rate} ({product.rating.count} reviews)
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;