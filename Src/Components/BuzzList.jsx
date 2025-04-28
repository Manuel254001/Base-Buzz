import React from 'react';
import BuzzCard from './BuzzCard';

function BuzzList({ buzzes, onJoin }) {
  return (
    <div>
      {buzzes.map((buzz) => (
        <BuzzCard key={buzz.id} buzz={buzz} onJoin={onJoin} />
      ))}
    </div>
  );
}

export default BuzzList;