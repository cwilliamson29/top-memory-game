import React, { useState } from 'react';
import Main from './components/mainComponent';
import Header from './components/headerComponent';
import { Randomizer } from './utils/randomUtil';

function App() {
  const [count, setCount] = useState(0);
  const [best, setBest] = useState(0);
  const [cardStyle, setCardStyle] = useState('card1');
  const [difArray, setDifArray] = useState([]);
  const newArray = Randomizer(difArray);

  if (count > best) {
    setBest(count);
  }

  return (
    <div className="container">
      <Header count={count} best={best} setBest={setBest} setCardStyle={setCardStyle} setDifArray={setDifArray} />
      <Main difArray={newArray} cardStyle={cardStyle} setCount={setCount} count={count} best={best} setBest={setBest} />
    </div>
  );
}

export default App;
