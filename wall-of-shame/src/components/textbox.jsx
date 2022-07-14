import React, { useState } from 'react';
import { Line } from 'react-chartjs-2'
const Text = (e) => {
    const [textft, setTextft] = useState('')
    return (

        <div className='textbox'>
            {e.tft}
            <div>Wild poke has won {e.wl.wildwin} times.</div>
            <div>Your poke has won {e.wl.trainerwin} times.</div>

        </div>);
}

export default Text;