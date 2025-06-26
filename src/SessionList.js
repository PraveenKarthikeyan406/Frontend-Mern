//SessionList.js
import React from 'react';

const sessions = [
  { id: 1, title: 'Morning Calm', duration: 300 },
  { id: 2, title: 'Focus Booster', duration: 600 },
  { id: 3, title: 'Evening Relaxation', duration: 900 },
];

function SessionList({ onSelectSession }) {
  return (
    <div className="session-list">
      <h3>Guided Meditation Sessions</h3>
      <div className="sessions column-layout">
        {sessions.map(session => (
          <div key={session.id} className="session-card" onClick={() => onSelectSession(session)}>
            <h4>{session.title}</h4>
            <p>Duration: {session.duration / 60} mins</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SessionList;
