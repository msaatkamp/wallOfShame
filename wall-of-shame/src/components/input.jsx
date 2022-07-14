import React from 'react'

const Input = (p) => {
    const name = p.name
    const handleNewPoke = (e) => {
        const value = e.target.value;
        p.set((prev) => { return { ...prev, [name]: value } })

        e.preventDefault();
    }
    if (p.name == 'wild') {
        return (<div>
            <input type="text" className='input'

                placeholder='insert wild poke name'
                onChange={handleNewPoke}
            />
        </div>);
    } return (<div>
        <input type="text" className='input'

            placeholder='insert your poke name'
            onChange={handleNewPoke}
        />
    </div>);
}

export default Input;