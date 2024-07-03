import React, { useContext, useState } from 'react'
import { FaHeart } from 'react-icons/fa6'
import Rating from './Rating'
import { BooksContext } from '../../context'
import { toast } from 'react-toastify'
import BookDetailsModal from './BookDetailsModal'

const BookCard = ({book}) => {
  const [showModal, setShowModal] = useState(false)
  const [selectedBook, setSelectedBook] = useState(null)
  const {state, dispatch} = useContext(BooksContext)

    // add to cart btn
    const handleAddToCart = (event, book) => {
      event.stopPropagation();

      const found = state.cartData.find((item) => item.id === book.id);
      if(!found) {
        dispatch({
          type: "ADD_TO_CART",
          payload: {...book}
        })
        toast.success(`Added ${book?.title} to Cart!`, {
          position: "top-right"
        });
      } else {
          toast.error(`The book ${book?.title} has already been added to the cart`, {
          position: "top-right"
        })
      }
    }
    const handleBookSelection = (book) => {
      setSelectedBook(book);
      setShowModal(true);
    }

    function handleModalClose() {
      setSelectedBook(null)
      setShowModal(false)
    }
    
    const handleBookMarkToggle = (event, book) => {
      event.stopPropagation();
      dispatch({
        type: "TOGGLE_BOOKMARK",
        payload: book

    })
  }
  return (
    <>
    {
      showModal && (
        <BookDetailsModal 
          book={selectedBook}
          onClose= {handleModalClose}
          onCartAdd = {handleAddToCart}
        />
      )
    }
      <figure className='p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl'>
          <a href="#">
            <div className='relative'>
              <button className={`absolute top-2 right-2 p-1 ${state.bookMarkedBooks.some((b) => b.id === book?.id) ? "bg-primary" : ""}`}
              onClick={(e) => handleBookMarkToggle(e,book)}
              >
                <FaHeart/>
              </button>
              <img
              onClick={() => handleBookSelection(book)}
              src={book?.cover} alt={book?.title} className='h-96 object-cover'/>
            </div>
            {/* Details */}
            <figcaption className='pt-4'onClick={() => handleBookSelection(book)} >
              <h3 className='text-xl mb-1'>{book?.title}</h3>
              <p className='text-[#575A6E] text-sm mb-2'>{book?.genre}</p>
              <div className='flex items-center space-x-1 mb-5'>
                  <Rating value={book?.rating} />
              </div>
              <button
               onClick={(e) => handleAddToCart(e, book)} className='bg-primary rounded-lg py-2 px-5 flex items-center gap-2 justify-center text-[#171923] font-semibold text-sm'>
                 <span>${book?.price} | Add to Cart</span>
              </button>
            </figcaption>
          </a>
      </figure>
    </>
  )
}

export default BookCard