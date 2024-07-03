const initialState = {
    cartData: [],
    bookMarkedBooks: []
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
               ...state,
                cartData: [...state.cartData, action.payload]
            }
        case "REMOVE_FROM_CART":
            return {
               ...state,
                cartData: state.cartData.filter(item => item.id!== action.payload.id)
            }

        case "TOGGLE_BOOKMARK":
            const bookIndex = state.bookMarkedBooks.findIndex(book => book.id === action.payload.id)
            if(bookIndex === -1) {
                return {
                   ...state,
                    bookMarkedBooks: [...state.bookMarkedBooks, action.payload]
                }
            } else {
                const updatedBookmarkedBooks = [...state.bookMarkedBooks]
                updatedBookmarkedBooks.splice(bookIndex, 1)
                return {
                    ...state,
                    bookMarkedBooks:  updatedBookmarkedBooks
                }
            }
        default:
            return state
        }
}

export {
    cartReducer,
    initialState
}