import React, { useState } from 'react';
const Text = (e) => {
    const [textft, setTextft] = useState('')
    return (
        <div>
            <div className='textbox'> {e.tft}</div>
        </div>);
}

export default Text;