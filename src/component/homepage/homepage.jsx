import React from 'react';
import NewBooks from '../newbooks/newbooks';
import BooksView from '../booksview/booksview';
import Header from './../header/header';


const HomePage = ({books }) => {
    return(
        <>
        <Header />  
        <NewBooks books={books} />
        <BooksView books={books}  />
        </>
    )
}




export default HomePage;

