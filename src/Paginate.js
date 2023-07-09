import React from 'react'

export const Paginate = ({postsPerPage, totalPosts, paginate}) => {
  
    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++)
    {
        pageNumbers.push(i)
    }



    return (
    <nav>

    <ul className='pagination '>
        {pageNumbers?.map(number => (
            
            <>
            {
                number > 25 ?
                (<>
                
                </>)
                :
                (<>
                    <li key = {number} className='page-item'  aria-current="page">

                        <a onClick={() => paginate(number)} href="!#" className='page-link'>

                            {number}
                        </a>

                    </li>
                </>)
            }
            


            </>
        ))}
    </ul>

    </nav>
  )
}
