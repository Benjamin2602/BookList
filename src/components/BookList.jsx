import React from 'react'
import Book from './Book'


const books = [
  {
    id: 1,
    author: "James Clear",
    title: 'Atomic Habits',
    img: 'https://m.media-amazon.com/images/I/51B7kuFwQFL._SX329_BO1,204,203,200_.jpg'
  },
  {
    id: 2,
    author: "Nick Trenton",
    title: 'Stop Overthinking',
    img: 'https://m.media-amazon.com/images/I/41STeQ+eLQL._SX311_BO1,204,203,200_.jpg'
  },
  {
    id: 3,
    author: "Ramit Sethi",
    title: 'I will teach you to be rich',
    img: 'https://m.media-amazon.com/images/I/51eDMGwZVvL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'
  },
  {
    id: 4,
    author: " Ann Napolitano",
    title: 'Hello Beautiful',
    img: 'https://m.media-amazon.com/images/I/51k+9K+aFCL._SY344_BO1,204,203,200_.jpg'
  },
  {
    id: 5,
    author: "MJ DeMarco",
    title: 'The Millionaire Fastlane',
    img: 'https://m.media-amazon.com/images/I/41lFb7+HGKL.jpg'
  },
  {
    id: 6,
    author: "collen hoover",
    title: 'Ugly Love',
    img: 'https://m.media-amazon.com/images/I/41mBCtaJ1XL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'
  },

]


const BookList = () => {
  return (
    <section className="book-list">
      {books.map((book) => {
        return <Book key={book.id} {...book}/>
      })}
        {/* const {id,author,title,img} = book 
         return <Book key={id} img = {img} title={title} author={author}/> */}
      
    </section>
  )
}

export default BookList
