import React, { useEffect, useState } from 'react'
import './Search.css'
import Result from './Result'
export default function Search() {

    const [pokemons, setPokemons] = useState([])
    const [filteredPokemons, setFilteredPokemons] = useState([])
    const getPoke = async () => {
      

        try {
            
            const res = await fetch("https://raw.githubusercontent.com/shubhambash/data/main/pokemons_final.json")
        
            const ret = await res.json();

         
            setPokemons(ret.results)
            setFilteredPokemons(ret.results)
          
            


        } catch (error) {
            console.log(error)
        }

    }

    const handleInput = (input) => {
      
        const filteredPokemons = []

        for(let i = 0; i < pokemons.length; i++)
        {
         
              
                
                let a = pokemons[i].name.toLowerCase()
                let b = input.toLowerCase()

                if(a.match(b))
                {
                    filteredPokemons.push(pokemons[i])
                }
            
        }
        


        setFilteredPokemons(filteredPokemons)
    }

    useEffect(() => {
        getPoke()
    }, [])

  return (
    <>

        <div className='container' id='outer-search-body'>

            <input className='' id='search-bar' name='searchbar'
            placeholder='E.g. Mewtwo'
            onChange={(e) => handleInput(e.target.value)}
            />

        </div>

        {/* display results */}

        
        <Result pokemons={filteredPokemons}/>

  

    </>
  )
}
