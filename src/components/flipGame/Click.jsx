import React, { useState } from 'react'
import EasyLevelDisplay from '../levels/EasyLevelDisplay';
//import Easy from '../levels/Easy'
import MediumLevelDisplay from '../levels/MediumLevelDisplay'
import Hard from '../levels/Hard'

function Click({letter}) {
    const [ isClicked, setIsClicked ] = useState(false);
    const [ style, setStyle ]  = useState('block');
    const [ displayText, setDisplayText ]= useState('');
    const [ contentVisible, setContentVisible ] = useState(false);
    const [ selectedComponent, setSelectedComponent ] = useState(null);

    const HandleLevelSelect = (text) => {
        setSelectedComponent(text);
        //alert("hello ppyyyy");
    }

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
            setSelectedComponent(null);//we reset the selected component
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
            <button onClick={handleLetterClick} className='bg-color w-[410px] content-container border h-68 z-10'>
                {Array.isArray(displayText) ? (
                //if displayText is an array
                displayText.map((text, index) => (
                    <div className='flex flex-col justify-center ml-3 text-sm w-[200px] h-24'><div
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
            <div className='relative'>
                {Array.isArray(displayText) ? (
                //if displayText is an array
                displayText.map((text, index) => (
                    <div className='flex flex-col items-center justify-center h-[64px]'><button key={index} className='w-48' onClick={()=>HandleLevelSelect(text)} >{text}</button></div>
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
        <button className={`${style} w-full h-full`} onClick={handleLetterClick}>
            {isClicked ? (contentVisible ? 'Hide Content' : 'Show content') : letter}
        </button>
        <span className={`${isClicked === false ? 'hidden' : 'bg-color absolute'} text-xl `}>
            {isClicked && contentVisible && (
                content
            )}  
            
        </span>
        <div>{selectedComponent === 'EASY' && (<EasyLevelDisplay />)}
            {selectedComponent === 'MEDIUM' && (<MediumLevelDisplay />)}
            {selectedComponent === 'HARD' && <Hard />}</div>
    </div>
  )
}

export default Click
