//LoginForm.js
import React, { useState } from 'react';
import axios from 'axios';

function LoginForm({ onClose, onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post('http://localhost:3003/api/login', { username, password });
    onLogin(res.data.username);
  } catch (err) {
    alert('Invalid username or password. Please signup.');
  }
};

  return (
    <div className="modal">
      <form className="form glass" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="btn-glow" type="submit">Login</button>
        <button className="btn-cancel" type="button" onClick={onClose}>Cancel</button>
      </form>
    </div>
  );
}

export default LoginForm;
