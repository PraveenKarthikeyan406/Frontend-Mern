//SignupForm.js
import React, { useState } from 'react';
import axios from 'axios';

function SignupForm({ onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

const handleSignup = async (e) => {
  e.preventDefault();
  try {
    await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/signup`, { username, password });
    alert('Signup successful! You can now log in.');
    onClose();
  } catch (err) {
    alert('Signup failed. Username may already exist.');
  }
};

  return (
    <div className="modal">
      <form className="form glass" onSubmit={handleSignup}>
        <h2>Signup</h2>
        <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="btn-glow" type="submit">Signup</button>
        <button className="btn-cancel" type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}

export default SignupForm;
