import React from 'react'

const FButton = (e) => {

    const handleRandom = () => {

        const random = Math.random()

        if (random > 0.5) {
            e.set(`What a shame, the wild ${e.poke[0].name} defeated your ${e.poke[1].name}.`)
            e.track((prev) => { return { ...prev, ['wildwin']: parseFloat(e.pt.wildwin) + 1 } })
        } else if (random < 0.5) {

            e.set(`congratulations, your ${e.poke[1].name} won!!`)

            e.track((prev) => { return { ...prev, ['trainerwin']: parseFloat(e.pt.trainerwin) + 1 } })
        }
    }

    return (
        <div >
            <button className='fbtn' onClick={handleRandom} >Fight!</button>
        </div>);
}

export default FButton;