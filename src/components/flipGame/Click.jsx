import React, { useState } from 'react'

function Click({letter}) {
    const [ isClicked, setIsClicked ] = useState(false);
    const [ style, setStyle ]  = useState('block');
    const [ displayText, setDisplayText ]= useState('');

    const handleLetterClick = () => {
        if (!isClicked) {
            //alert(`${letter} clicked`);
            setIsClicked(!isClicked);
            setStyle('hidden');

            //setting the appropriate text based on the letter(F,L,I,P)
            switch (letter) {
                case 'F' :
                    setDisplayText('Hello F');
                    break;
                case 'L' :
                    setDisplayText('Hello L');
                    break;
                case 'I' :
                setDisplayText('Hello I');
                break;
                case 'P' :
                    setDisplayText(['EASY', 'MEDIUM', 'HARD']);
                break;
                default :
                setDisplayText('Invalid letter');
                break;
            }
        }
    }

  return (
    <div className='w-44 h-48 '>
        <button className={style} onClick={handleLetterClick}>{letter}</button>
        <span className={`${isClicked === false ? 'hidden' : 'bg-black '} border`}>
            {Array.isArray(displayText) ? (
                //if displayText is an array
                displayText.map((text, index) => (
                    <div className='flex flex-col'><button key={index}> {text} </button></div>
                ))                
            ): (
                //if displayText is not an array
                displayText
            )}
            
        </span>
    </div>
  )
}

export default Click
