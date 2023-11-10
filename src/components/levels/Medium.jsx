import React, { useEffect, useState } from 'react'
import { IconList } from './IconList'

function Medium({ onSelectComponent }) {

  const [ cards, setCards ] = useState([]);
  const [ flipped, setFlipped ] = useState([]);
  const [ matched, setMatched ] = useState([]);
  const [ isChecking, setIsChecking ] = useState(false);
  const [ count, setCount ] = useState(5);

  //shuffle the cards to initialize the game
  useEffect(()=>{
    const shuffleCards = shuffle([...IconList[0].Icons, ...IconList[0].Icons, ...IconList[0].Icons, ...IconList[0].Icons]);
    setCards(shuffleCards);
  }, []);

  useEffect(()=>{
    const CountDown = setInterval(() => {
      if (count === 0 )  {
        clearInterval(CountDown);
      }
      if (count > 0) {
        setCount(count -1);
      }
    }, 1000);
    return  () => {
      clearInterval(CountDown);
    }
  }, [count]);

  const handleCardClick = (index) =>{
    if(isChecking || flipped.includes(index)) {
      return;
    }

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setIsChecking(true);
      if (cards[newFlipped[0]] === cards[newFlipped[1]]) {
        setTimeout(() => {
          setMatched([...matched, ...newFlipped]);
          setFlipped([]);
          setIsChecking(false);
        }, 1000);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setIsChecking(false);
        }, 1000);
      }
    }
  };

  //const handleComponentSelect = (component) => {
   // onSelectComponent(component);
  //}
  const isCardFlipped = (index) => flipped.includes(index);
  const isCardMatched = (index) => matched.includes(index);

  // Fisher-Yates Shuffle Algorithm
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div className='absolute bg-gray-800 w-full h-full top-0 left-0'>
      <p className='text-2xl flex justify-center'>medium level, lets get started!!</p>
      <div className='flex flex-col justify-center items-center m-2 border '>

        {/*check whether countdown is over to display a fail game*/}
      {count === 0 && matched.length !== 16 && (
          <div className='flex gap-3 text-3xl'>
            <p>Time's up!</p>
            <button onClick={() => onSelectComponent()} className='border bg-emerald-800 hover:opacity-40 p-1 rounded-lg'>Play Again</button>
          </div>
        )}
        {/*check whether all icons are matched for a won game*/}
        {matched.length === 16 && (
          <div className='flex flex-col justify-center items-center text-3xl absolute bg-emerald-800 z-10 w-56 h-36'>
            <span>You Won!</span><br />
            <button onClick={() => onSelectComponent()} className='border bg-emerald-700 hover:opacity-40 p-1 rounded-lg'>Play Again</button>
          </div>
        )}
        <div className='grid grid-cols-4 p-2'>
        {cards.map((icon, index) => (
            <div
              className={`m-1 p-2 w-20 h-16 bg-color cursor-pointer flex items-center justify-center ${
                isCardFlipped(index) || isCardMatched(index) ? 'opacity-60' : ''
              }`}
              key={index}
              onClick={() => handleCardClick(index)}
            >
              {isCardFlipped(index) || isCardMatched(index) ? icon : null}
            </div>
          ))}
          {/*{IconList[0].Icons.map((icon, index) =>(
            <button className='p-2 bg-color m-1 w-20 h-16' key={index} onClick={() => handleCardClick(index)}>{icon}</button>
          ))}
          */}
        </div>
        
        <span className='text-2xl'>Time Remaining : {count} </span>
      </div>
      {/*<div><Loader /></div>*/}
    </div>
  )
}

export default Medium
