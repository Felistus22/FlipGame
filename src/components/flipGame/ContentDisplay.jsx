import React, { useState } from 'react';
import Easy from '../levels/Easy';

function ContentDisplay() {

    const [selectedComponent, setSelectedComponent] = useState(null);

    const handleComponentSelect = (component) => {
        setSelectedComponent(component);
      };

    return (
        <div>
            <div className=' '>
                <Easy onSelectComponent={setSelectedComponent}/>
        
            </div>
            <div className='bg-primary-light dark:bg-primary-dark w-full'>
                {selectedComponent? (selectedComponent ) 
                : (<Easy onSelectComponent={handleComponentSelect} />)}
            </div>
        </div>
    );
}

export default ContentDisplay;
