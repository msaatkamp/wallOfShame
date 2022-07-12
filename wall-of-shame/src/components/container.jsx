import React from 'react';
const Container = (e) => {
    const Uc = (p) => {
        //pokemon <=1 ? x :
        if (typeof p.name == 'string') {
            return <>{p.name.toUpperCase()}</>
        }
    }
    return (
        <div className="container">
            <div className='p1'>
                {e.pokemon[0] && e.pokemon[0].sprites && e.pokemon[0].sprites.front_default && <img src={e.pokemon[0].sprites.front_default} />}
            </div>
            <span className='pname1'> {e.pokemon[0] && e.pokemon[0].name && <Uc name={e.pokemon[0].name} />}</span>
            <div className='p2'>
                {e.pokemon[1] && e.pokemon[1].sprites && e.pokemon[1].sprites.back_default && <img src={e.pokemon[1].sprites.back_default} />}
                <span className='pname2'>{e.pokemon[1] && e.pokemon[1].name && <Uc name={e.pokemon[1].name} />}</span>
            </div>
        </div>);
}

export default Container;