import React, { useEffect, useState } from 'react'
import './Result.css'
import Posts from './Posts'
import { Paginate } from './Paginate'

export default function Result({pokemons}) {

    const [totalPosts, setTotalPosts] = useState(0)
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(10)
    const [currentPosts, setCurrentPosts] = useState([])


    const paginate = (number) => setCurrentPage(number)


    useEffect(() => {
        const indexOfLastPost = currentPage * postPerPage
        const indexOfFirstPost = indexOfLastPost - postPerPage
        
        const currentPosts1 = pokemons.slice(indexOfFirstPost, indexOfLastPost)
        setCurrentPosts(currentPosts1)
        setTotalPosts(pokemons.length)
    }, [pokemons, currentPage])



      
    

  return (
    <>
    <div id='result-wrapper'>

   
    <div className='container' id='result-outer-body'>

       

        {currentPosts?.map((item) => (
            <>

 
            <Posts post = {item}/>

        
            
            </>
        )

        )}

  
      
        
    </div>

    <div className='' id='pagination-outer-body'>
        
        <Paginate postsPerPage={postPerPage} totalPosts={totalPosts} paginate={paginate}/>
        
     
    </div>


    </div>


</>

  )
}
