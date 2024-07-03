import React from 'react'
import { getAllBooks } from '../../data/books'
import BookCard from '../books/BookCard'

const NewRelease = () => {
    const data = getAllBooks()
    const today = new Date()

    //filter books
    const oneDay = 24 * 60 * 60 * 1000;
    const sevenDaysAgo = today.getTime() - (7 * oneDay)
    const latestBooks = data.filter(book => {
        const bookCreateDate = new Date(book.createdAt).getTime();
        return bookCreateDate >= sevenDaysAgo;
    })
  return (
    <div className='content'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7'>  
            {
                latestBooks.map((book, i) => (
                    <BookCard key={i} book={book}/>
                ))
            }
        </div>
    </div>
  )
}

export default NewRelease