import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';

// Mock chat messages
const mockMessages = [
  { user: 'User1', text: 'Hey, where are we meeting?' },
  { user: 'User2', text: 'At the coffee shop on Main St!' },
];

function ChatWindow({ buzz, onClose }) {
  const [messages, setMessages] = useState(mockMessages);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (!newMessage) return;
    setMessages([...messages, { user: 'CurrentUser', text: newMessage }]);
    setNewMessage('');
  };

  return (
    <Dialog open={true} onClose={onClose} fullWidth>
      <DialogTitle>Chat for "{buzz.activity}"</DialogTitle>
      <DialogContent>
        <List>
          {messages.map((msg, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${msg.user}: ${msg.text}`} />
            </ListItem>
          ))}
        </List>
        <TextField
          fullWidth
          label="Type a message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          sx={{ mt: 2 }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleSendMessage} variant="contained">
          Send
        </Button>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ChatWindow;