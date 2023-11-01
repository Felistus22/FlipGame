import React from 'react';

function ContentDisplay({ isClicked, contentVisible, content }) {
    return (
        <div>
            {isClicked && contentVisible ? content : null}
        </div>
    );
}

export default ContentDisplay;
