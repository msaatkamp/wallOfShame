import React from 'react'

const FButton = (e) => {

    const handleRandom = () => {
        const random = Math.random()
        e.set('teste')
        if (random > 0.5) {
            e.set(`What a shame, the wild ${e.poke[0].name} defeated your ${e.poke[1].name}.`)
        } else
            e.set(`congratulations, your ${e.poke[1].name} won!!`)

    }

    return (
        <div >
            <button className='fbtn' onClick={handleRandom} >Fight!</button>
        </div>);
}

export default FButton;