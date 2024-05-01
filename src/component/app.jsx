import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AddNewItem from "./addnewitem/addnewitem";
import Admin from "./admin/admin";
import Edit from "./edit/edit";
import ShoppingCart from "./shoppingcart/shoppingcart";
import BookDetails from "./bookdetails/bookdetails";
import HomePage from "./homepage/homepage";
import SignIn from "./signin/signin";
import Navbar from "./navbar/navbar";
import Books from "./db"
import AllBooks from "./allbooks/allbooks";
import Wishlist from "./wishlist/wishilst";
import Footer from "./footer/footer";
import './app.css'
import AboutUs from './aboutus/aboutus';

const App = () => {

  const [books, setBooks] = useState(Books);
  const [user, setUser] = useState("");


  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setBooks(Books);
  //   }, 1200);
  //   return () => clearTimeout(timeout)
  // }, []);


  const onWishlist = (book) => {
    //edit
    book.wishlist = true;
    setBooks([...books], books);
  };

  const onCart = (book) => {
    //edit
    book.isInCart = true;
    book.count++;
    setBooks([...books], books);

    // handleSubmit(book);
  };



  const handleRemoveItem = async (book) => {
    //clone

    //edit
    if (book.wishlist === true) {
      book.wishlist = false;
    }
    book.isInCart = false;
    setBooks([...books], books);

  };

  const handleDelete = async (book) => {
    //clone
    //edit
    const newbooks = books.filter((p) => book.id !== p.id);
    //set state
    setBooks(newbooks);

  };

  const handleIncrement = (book) => {
    const index = books.indexOf(book);
    //edit
    books[index].count++;
    //
    setBooks(books);
  };

  const handleDecrement = (book) => {
    //edit
    if (book.count >= 1) {
      book.count--;
    } else {
      alert("the count cannot be less than one item");
    }
    //
    setBooks(books);
  };

  return (
    <React.Fragment>
      <Navbar books={books} user={user} setUser={setUser} />

      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage onSave={onCart} books={books} />}
          />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />
          <Route
            path="/admin"
            element={<Admin />}
          />
          <Route
            path="/aboutus"
            element={<AboutUs />}
          />
          <Route
            path="/admin/edit"
            element={<Edit books={books} onDelete={handleDelete} />}
          />
          <Route
            path="/allbooks" books
            element={<AllBooks books={books} />}
          />
          <Route
            path="/admin/addnewitem"
            element={<AddNewItem books={books} setBooks={setBooks} />}
          />
          <Route
            path="/bookdetails/:id"
            element={<BookDetails books={books} onSave={onCart} onWishlist={onWishlist} />}
          />

          <Route
            path="allbooks/bookdetails/:id"
            element={<BookDetails books={books} onSave={onCart} onWishlist={onWishlist} />}
          />
          <Route
            path="wishlist/bookdetails/:id"
            element={<BookDetails books={books} onSave={onCart} onWishlist={onWishlist} />}
          />
          <Route
            path="/wishlist"
            element={<Wishlist books={books} onDelete={handleRemoveItem} />}
          />
          <Route
            path="/shoppingcart"
            element={
              <ShoppingCart
                books={books}
                onSave={onCart}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onDelete={handleRemoveItem}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;

