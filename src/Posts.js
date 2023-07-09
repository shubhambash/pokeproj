import React from "react";
import Types from "./Types";
const Posts = ({post}) => {

    const type = post.variations[0].types[0].toLowerCase()
    const [...types] = post.variations[0].types
    const hp = post.variations[0].stats.hp
    const total = post.variations[0].stats.total
    const attack = post.variations[0].stats.attack
    const speed = post.variations[0].stats.speed
    const defense = post.variations[0].stats.defense
    const description = post.variations[0].description
    


    return <> <div className='container' id='result-inner-body' data-bs-toggle="modal" data-bs-target={`#staticBackdrop${post.num}`}>

    <div id="poke-image">
    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${post.num}.png`}/>
    </div>

    

    <div>
        <p id="poke-name">{post.name}</p>
    </div>

    <div>
    <img src={Types[type]}  className={`${type}`} id="poke-type-image"/>
    </div>
    </div>


{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button> */}

<div class="modal fade" id={`staticBackdrop${post.num}`} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">{post.name}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

        <div >
            <a href={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${post.num}.png`}>
            <img  id="poke-image-greater" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${post.num}.png`}/>
            </a>
        
        </div>

        <div>
            <h4>Description</h4>
            <p>{description}</p>
        </div>

     <div id="progress-bar">

            <div>
            <h5>TOT </h5>
            </div>
           
           <div>
           <progress className="bar" value={total} max="780"></progress>
           </div>
            
        </div>

        <div id="progress-bar">

            <div>
            <h5>HP&nbsp; </h5>
            </div>
           
           <div>
           <progress className="bar" value={hp} max="255"></progress>
           </div>
            
        </div>

        <div id="progress-bar">

            <div>
            <h5>ATK </h5>
            </div>
           
           <div>
           <progress className="bar" value={attack} max="160"></progress>
           </div>
            
        </div>

        <div id="progress-bar">

        <div>
        <h5>DEF </h5>
        </div>

        <div>
        <progress className="bar" value={defense} max="180"></progress>
        </div>

        </div>

        <div id="progress-bar">

        <div>
        <h5>SPD </h5>
        </div>

        <div>
        <progress className="bar" value={speed} max="180"></progress>
        </div>

        </div>


        <div id="modal-type">
            <h4>Type</h4>
       
            &nbsp;&nbsp;
            &nbsp;
            {types?.map(type => (
            <div>
            <img src={Types[type.toLowerCase()]}  className={`${type.toLowerCase()}`} id="poke-type-image"/>
            &nbsp;&nbsp;&nbsp;
            </div>  
            ))}
        </div>


      



      </div>
     
    </div>
  </div>
</div>


    </>
}

export default Posts