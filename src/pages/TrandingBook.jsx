import React from 'react'
import { getAllBooks } from '../data/books'
import BookCard from './books/BookCard'

const TrandingBook = () => {
    const books = getAllBooks()
    const trendingBooks = books.sort((a, b) => b.rating - a.rating) 
  return (
    <div className='content'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7'>  
            {
                trendingBooks.map((book, i) => (
                    <BookCard key={i} book={book}/>
                ))
            }
        </div>
    </div>
  )
}

export default TrandingBook