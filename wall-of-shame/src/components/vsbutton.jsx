import React from 'react'


const VS = (e) => {
    const getRequestSample = {
        method: 'GET',
        headers: new Headers(),
        mode: 'cors',
        cache: 'default'
    };
    const onMount = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/` + e.pokeo.wild, getRequestSample)
            .then(res => {
                if (res.status === 200) {
                    return res.json(); // Reading the body stream response and returning it to the next level
                }
                throw "nao tem pokemon"
            }
            )
            .then(answer => {
                e.setPokemon([answer])
            }).catch(e => console.log(`Could not fetch pokemon, error: ${e}`)).finally(() => {
            });
        fetch(`https://pokeapi.co/api/v2/pokemon/` + e.pokeo.trainer, getRequestSample)
            .then(res => {
                if (res.status === 200) {
                    return res.json(); // Reading the body stream response and returning it to the next level

                }
                throw "nao tem pokemon"
            }
            )
            .then(answer => {
                e.setPokemon(pokemon => [...pokemon, answer])
            }).catch(e => console.log(`Could not fetch pokemon, error: ${e}`)).finally(() => {
            });
    }




    return (
        <div>
            <button onClick={onMount}> VS </button>
        </div>);
}

export default VS;