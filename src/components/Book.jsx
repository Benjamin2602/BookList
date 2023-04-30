import React from 'react'

// const title =  'Atomic Habits'
// // const author = 'james clear'
// const img = 'https://m.media-amazon.com/images/I/51B7kuFwQFL._SX329_BO1,204,203,200_.jpg'

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
