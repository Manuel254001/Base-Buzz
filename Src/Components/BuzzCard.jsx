import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Chip,
  Box,
} from '@mui/material';

function BuzzCard({ buzz, onJoin }) {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Typography variant="h6">{buzz.activity}</Typography>
        <Typography color="textSecondary">
          Location: Within {buzz.locationRadius}
        </Typography>
        <Typography color="textSecondary">Time: {buzz.timeframe}</Typography>
        <Box sx={{ mt: 1, mb: 1 }}>
          {buzz.vibeTags.map((tag) => (
            <Chip key={tag} label={tag} size="small" sx={{ mr: 1 }} />
          ))}
        </Box>
        <Typography color="textSecondary">
          Created by: {buzz.creator}
        </Typography>
        <Typography color="textSecondary">
          Joined: {buzz.joined.length} user(s)
        </Typography>
        <Button
          variant="outlined"
          onClick={() => onJoin(buzz.id)}
          sx={{ mt: 2 }}
        >
          Join Buzz
        </Button>
      </CardContent>
    </Card>
  );
}

export default BuzzCard;