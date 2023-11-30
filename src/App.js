import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import Header from './components/Header/Header.js';
import './App.scss';
import PokemonList from './components/PokemonList/PokemonList.js'
import axios from 'axios';
import Pagination from './components/Pagination/Pagination.js';

export default function App() {

  const [pokemon, setPokemon] = useState([])
  // const [pokemonUrlList, setPokemonUrlList] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
      setLoading(true)
      let cancel
      axios.get(currentPageUrl, {
        cancelToken: new axios.CancelToken(c => cancel = c)
      }).then(res => {
        setLoading(false)
        setNextPageUrl(res.data.next)
        setPrevPageUrl(res.data.previous)  
        setPokemon(res.data.results.map(p => p))
        // setPokemonUrlList(res.data.results.url.map(p => p))
      })
      return () => cancel()
  }, [currentPageUrl]);
  
  function gotoNextPage(){
    setCurrentPageUrl(nextPageUrl)
  }

  function gotoPrevPage(){
    setCurrentPageUrl(prevPageUrl)
  }

  if(loading) return "Loading..."

  return (
    <div>
      <Header />
      <section className='PokemonCardSection'>
        <PokemonList pokemon={pokemon}/>
        <Pagination 
          gotoNextPage={nextPageUrl ? gotoNextPage : null}
          gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
        />
      </section>
    </div>
)}