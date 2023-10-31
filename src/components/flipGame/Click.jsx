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
                case 'I' :
                    setDisplayText([
                        '<p><b>Instructions</b><br />- Flip is a timed card memory game. Click the green cards to see what symbol they uncover and try to find the matching symbol underneath the other cards.</p>',
                        '<p>- Uncover two matching symbols at once to eliminate them from the game.<br/>- Eliminate all cards as fast as you can to win the game. Have fun FLIPing!</p>',
                    ]);
                break;
                case 'P' :
                    setDisplayText(['EASY', 'MEDIUM', 'HARD']);
                break;
                default :
                setDisplayText('L');
                break;
            }
        }
    }

    const createMarkup = (html) => {
        return { __html: html };
    }


    let content = null;
    //render content based on letter
    if (letter === 'F'){
        content = <div className='w-48 h-48 flex flex-col justify-center items-center'>{displayText}</div>
    }else if (letter === 'I'){
        content = (
            <div className='border w-[400px] h-68'>
                {Array.isArray(displayText) ? (
                //if displayText is an array
                displayText.map((text, index) => (
                    <div className='flex flex-col justify-center ml-3 bg-color text-sm  w-[200px] h-24'><div
                    className='w-80 p-1 items-center'
                     key={index} dangerouslySetInnerHTML={createMarkup(text)} /></div>
                ))                
            ): (
                //if displayText is not an array
                null
            )}
            </div>
        );
    } else if (letter === 'P') {
        content = (
            <div className='rotate1'>
                {Array.isArray(displayText) ? (
                //if displayText is an array
                displayText.map((text, index) => (
                    <div className='flex flex-col items-center justify-center w-48 h-[64px]'><button key={index}> {text} </button></div>
                ))                
            ): (
                //if displayText is not an array
                null
            )}
            </div>
        )
    }

  return (
    <div className='w-44 h-44 flex flex-col justify-center items-center'>
        <button className={style} onClick={handleLetterClick}>{letter}</button>
        <span className={`${isClicked === false ? 'hidden' : 'bg-color absolute'} text-xl rotate`}>
            {content}
            {/*{Array.isArray(displayText) ? (
                //if displayText is an array
                displayText.map((text, index) => (
                    <div className='flex flex-col items-center justify-center w-80 h-[60px]'><button key={index}> {text} </button></div>
                ))                
            ): (
                //if displayText is not an array
                <div className=' flex items-center justify-center w-40 h-44'>{displayText}</div>
            )}*/}
            
        </span>
    </div>
  )
}

export default Click
