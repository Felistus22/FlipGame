import React, { useState } from 'react'

function Click({letter}) {
    const [ isClicked, setIsClicked ] = useState(false);
    const [ style, setStyle ]  = useState('block');
    const [ displayText, setDisplayText ]= useState('');
    const [ contentVisible, setContentVisible ] = useState(false);

    const handleLetterClick = () => {
        setIsClicked(!isClicked);
        if (!contentVisible) {
            //alert(`${letter} clicked`);
            //if content is currently visible, hide it
            setContentVisible(true);
            setStyle('hidden');

            //setting the appropriate text based on the letter(F,L,I,P)
            switch (letter) {
                case 'F' :
                    setDisplayText('Hello F stats');
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
        }else {
            //if content is visible, show it
            setContentVisible(false);
            setStyle('block');
        }
    }

    const createMarkup = (html) => {
        return { __html: html };
    }


    let content = null;
    //render content based on letter
    if (letter === 'F'){
        content = <button onClick={handleLetterClick} className='w-48 h-48 flex flex-col justify-center items-center'>{displayText}</button>
    }else if (letter === 'I'){
        content = (
            <button onClick={handleLetterClick} className=' bg-color w-[410px] content-container h-68'>
                {Array.isArray(displayText) ? (
                //if displayText is an array
                displayText.map((text, index) => (
                    <div className='flex flex-col justify-center ml-3 text-sm  w-[200px] h-24'><div
                    className='w-80 p-1 items-center'
                     key={index} dangerouslySetInnerHTML={createMarkup(text)} /></div>
                ))                
            ): (
                //if displayText is not an array
                null
            )}
            </button>
        );
    } else if (letter === 'P') {
        content = (
            <button onClick={handleLetterClick} className=''>
                {Array.isArray(displayText) ? (
                //if displayText is an array
                displayText.map((text, index) => (
                    <div className='flex flex-col items-center justify-center w-48 h-[64px]'><button onClick={HandleLevelSelect} key={index} dangerouslySetInnerHTML={createMarkup(text)} /></div>
                ))                
            ): (
                //if displayText is not an array
                null
            )}
            </button>
        )
    }
    const HandleLevelSelect = () => {
        let y = true;
    }

  return (
    <div className='w-44 h-44 flex flex-col justify-center items-center'>
        <button className={style} onClick={handleLetterClick}>
            {isClicked ? (contentVisible ? 'Hide Content' : 'Show content') : letter}
        </button>
        <span className={`${isClicked === false ? 'hidden' : 'bg-color absolute'} text-xl `}>
            {isClicked && contentVisible && (
                content
            )}
            {/*{content}
            {Array.isArray(displayText) ? (
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
