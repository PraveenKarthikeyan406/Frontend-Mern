import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [userpass, setUserpass] = useState('');
  const showAlert=()=>{
    alert(`Username : ${username}\nUserPasss : ${userpass}`);
  };
  return (
    <div className='App'>
      <p>Learn more</p>
    <div className='App-header'>
      <h3>Username</h3>
      <input type='text' placeholder='Enter name' className='centerinput' value={username} onChange={(e) => setUsername(e.target.value)}/>
      
      <h3>Password</h3>
      <input type='password' placeholder='Enter password' className='centerinput' value={userpass} onChange={(e) => setUserpass(e.target.value)}/>
      <button className='button' onClick={showAlert}>Submit</button>
      </div>
      
    
    </div>
  );
}

export default App;
