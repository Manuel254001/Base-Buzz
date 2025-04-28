import React, { useState, useEffect } from 'react';
import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material';
import BuzzForm from './Components/BuzzForm';
import BuzzList from './Components/BuzzList';
import ChatWindow from './Components/ChatWindow';
import './App.css';

// Mock API for location and social graph (replace with Base MiniKit integration)
const mockApi = {
  getLocation: () => ({ lat: 37.7749, lng: -122.4194 }), // Mock SF coordinates
  getBuzzes: () => [
    {
      id: 1,
      activity: 'Coffee nearby?',
      locationRadius: '1 km',
      timeframe: 'Next hour',
      vibeTags: ['#casual', '#chill'],
      creator: 'User1',
      joined: ['User2'],
    },
  ],
  createBuzz: (buzz) => console.log('Buzz created:', buzz),
  joinBuzz: (buzzId, user) => console.log(`User ${user} joined Buzz ${buzzId}`),
};

function App() {
  const [buzzes, setBuzzes] = useState([]);
  const [location, setLocation] = useState(null);
  const [selectedBuzz, setSelectedBuzz] = useState(null);

  useEffect(() => {
    // Mock fetching location and buzzes
    setLocation(mockApi.getLocation());
    setBuzzes(mockApi.getBuzzes());
  }, []);

  const handleCreateBuzz = (buzz) => {
    mockApi.createBuzz({ ...buzz, creator: 'CurrentUser' });
    setBuzzes([...buzzes, { ...buzz, id: buzzes.length + 1, creator: 'CurrentUser', joined: [] }]);
  };

  const handleJoinBuzz = (buzzId) => {
    mockApi.joinBuzz(buzzId, 'CurrentUser');
    setBuzzes(
      buzzes.map((buzz) =>
        buzz.id === buzzId ? { ...buzz, joined: [...buzz.joined, 'CurrentUser'] } : buzz
      )
    );
    setSelectedBuzz(buzzes.find((buzz) => buzz.id === buzzId));
  };

  const handleCloseChat = () => {
    setSelectedBuzz(null);
  };

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Base Buzz
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" style={{ marginTop: '20px' }}>
        <BuzzForm onCreate={handleCreateBuzz} />
        <BuzzList buzzes={buzzes} onJoin={handleJoinBuzz} />
        {selectedBuzz && (
          <ChatWindow buzz={selectedBuzz} onClose={handleCloseChat} />
        )}
      </Container>
    </div>
  );
}

export default App;