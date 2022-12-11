import React from 'react'
import "./List.css"
function List({person}) {
    const {id,firstName,lastName,age,image} = person
  return (
    <div className="List">
     <img src={image} />
     <div class="content">
        <h4 className='name'>{firstName}</h4>
        <h5 className='age'>{age} Years</h5>
     </div>
    </div>
  )
}

export default List