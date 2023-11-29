import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './PokemonList.scss';

export default function PokemonList({ pokemon }) {

    const [sprites, setSprites] = useState ([]);

    useEffect(() => {
      const fetchSprites = async () => {
        const spritePromises = pokemon.map((p) =>
          axios.get(p.url).then((res) => res.data.sprites.front_default)
        );
        const spriteUrls = await Promise.all(spritePromises);
        setSprites(spriteUrls);
      };
      fetchSprites();
    },[pokemon]);

    return (
        <div className='pokemonList'>
            {pokemon.map((p, index) => (
                <div className='pokemonCard'key={p.name}>
                    <div>{p.name}</div>
                    <img src={sprites[index]}alt={p.name}/>
                </div>
            ))}
        </div>
    )
}