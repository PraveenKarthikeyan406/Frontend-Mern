//Navbar.js
import React from 'react';

function Navbar({ user, onLoginClick, onSignupClick, onLogout }) {
  return (
    <nav className="navbar">
      <h1>Meditation Timer</h1>
      <div>
        {user ? (
          <>
            <span>Hello, {user} 🙏</span>
            <button onClick={onLogout}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={onLoginClick}>Login</button>
            <button onClick={onSignupClick}>Signup</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
