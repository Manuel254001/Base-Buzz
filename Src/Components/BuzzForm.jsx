import React, { useState } from 'react';
import {
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Chip,
  Box,
} from '@mui/material';

const activityOptions = [
  'Coffee nearby?',
  'Anyone at the park?',
  'Looking for a study buddy?',
  'Quick chat about crypto?',
];
const radiusOptions = ['500 m', '1 km', '2 km', '5 km'];
const timeframeOptions = ['Next 30 mins', 'Next hour', 'This afternoon', 'Tonight'];
const vibeTagOptions = ['#casual', '#networking', '#chill', '#serious'];

function BuzzForm({ onCreate }) {
  const [activity, setActivity] = useState('');
  const [customActivity, setCustomActivity] = useState('');
  const [radius, setRadius] = useState('');
  const [timeframe, setTimeframe] = useState('');
  const [vibeTags, setVibeTags] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!activity && !customActivity) return;
    onCreate({
      activity: activity || customActivity,
      locationRadius: radius,
      timeframe,
      vibeTags,
    });
    setActivity('');
    setCustomActivity('');
    setRadius('');
    setTimeframe('');
    setVibeTags([]);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4 }}>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Activity/Interest</InputLabel>
        <Select
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          label="Activity/Interest"
        >
          <MenuItem value="">Custom</MenuItem>
          {activityOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {!activity && (
        <TextField
          fullWidth
          label="Custom Activity"
          value={customActivity}
          onChange={(e) => setCustomActivity(e.target.value)}
          sx={{ mb: 2 }}
        />
      )}
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Location Radius</InputLabel>
        <Select
          value={radius}
          onChange={(e) => setRadius(e.target.value)}
          label="Location Radius"
        >
          {radiusOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Timeframe</InputLabel>
        <Select
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
          label="Timeframe"
        >
          {timeframeOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Vibe Tags</InputLabel>
        <Select
          multiple
          value={vibeTags}
          onChange={(e) => setVibeTags(e.target.value)}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {vibeTagOptions.map((tag) => (
            <MenuItem key={tag} value={tag}>
              {tag}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" fullWidth>
        Create Buzz
      </Button>
    </Box>
  );
}

export default BuzzForm;