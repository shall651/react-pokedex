import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './PokemonPage.scss';
import PokemonList from '../PokemonList/PokemonList';

export default function PokemonPage( [pokemonCard] ){


    return(
        <div className='PokemonPage'>
            <div>
                <h1>{pokemonCard.name}</h1>
            </div>
        </div>
    )
}