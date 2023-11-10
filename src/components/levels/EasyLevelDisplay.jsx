import React, { useState } from 'react';
import Easy from './Easy';
import Flip from '../flipGame/Flip';

function EasyLevelDisplay() {
    const [isButtonFlipped, setIsButtonFlipped] = useState(false);//for the button click

    const handleComponentSelect = () => {
        setIsButtonFlipped(!isButtonFlipped);
    };

    return (
        <div>
            {isButtonFlipped ? (
                <div className='absolute opacity-100 top-0 left-0 text-lg bg-slate-400 w-screen h-screen '><Flip /></div>
            ) : (
                <div className="bg-red-500 dark:bg-green-800 w-full">
                    <Easy onSelectComponent={handleComponentSelect} />
                </div>
            )}
        </div>
    );
}

export default EasyLevelDisplay;
