import React from 'react'
import { getAllBooks } from '../data/books'
import BookCard from './books/BookCard';

const UpcommingBooks = () => {
    const books = getAllBooks();
    const upcomingBooks = books.filter(books => books?.upcoming === true)
  return (
    <div className='content'>
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7'>  
        {
            upcomingBooks.map((book, i) => (
                <BookCard key={i} book={book}/>
            ))
        }
    </div>
</div>
  )
}

export default UpcommingBooks