import React from 'react'

const Book = ({author,title,img}) => {

  return (
    <article className="book">
    <img src= {img} alt="atomic habits"
    />
     <h2>{title}</h2>
     <h4>{author}</h4>
      
    </article>
  )
}

export default Book
