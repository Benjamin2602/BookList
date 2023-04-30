import React from 'react'
import Book from './Book'


const BookList = () => {
  return (
    <section className="book-list">
    <Book
     author= "James Clear"
      title={ 'Atomic Habits'}
      img= 'https://m.media-amazon.com/images/I/51B7kuFwQFL._SX329_BO1,204,203,200_.jpg'
     />
    <Book
      author= "Nick Trenton"
      title={ 'Stop Overthinking'}
      img= 'https://m.media-amazon.com/images/I/41STeQ+eLQL._SX311_BO1,204,203,200_.jpg'
    />
    <Book
      author= "Ramit Sethi"
      title={ 'I will teach you to be rich'}
      img = 'https://m.media-amazon.com/images/I/51eDMGwZVvL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'
    />
    <Book
      author= " Ann Napolitano"
      title={ 'Hello Beautiful'}
      img= 'https://m.media-amazon.com/images/I/51k+9K+aFCL._SY344_BO1,204,203,200_.jpg'
    />

    <Book
      author= "MJ DeMarco"
      title={ 'The Millionaire Fastlane'}
      img= 'https://m.media-amazon.com/images/I/41lFb7+HGKL.jpg'
    />

    <Book
      author= "collen hoover"
      title={ 'Ugly Love'}
      img = 'https://m.media-amazon.com/images/I/41mBCtaJ1XL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg'
    />
      
    </section>
  )
}

export default BookList
