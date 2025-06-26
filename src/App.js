//App.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import Home from './Home';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import SessionList from './SessionList';
import Timer from './Timer';

function App() {
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [selectedSession, setSelectedSession] = useState(null);

  const handleLogin = (username) => {
    setUser(username);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      <Navbar
        user={user}
        onLoginClick={() => setShowLogin(true)}
        onSignupClick={() => setShowSignup(true)}
        onLogout={handleLogout}
      />
       <div className="main-content"></div>
      <Home />
      {user && (
        <>
          <SessionList onSelectSession={setSelectedSession} />
          {selectedSession && <Timer session={selectedSession} />}
        </>
      )}
      {showLogin && <LoginForm onClose={() => setShowLogin(false)} onLogin={handleLogin} />}
      {showSignup && <SignupForm onClose={() => setShowSignup(false)} />}
    <footer className="footer">
  <p>Relax. Meditate. Repeat.</p>
</footer>
    </div>
  );
}

export default App;
