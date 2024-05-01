import React, { useRef, useEffect, useState } from "react";
import "../header/header.css";
import images from '../../images';
import { Link } from "react-router-dom";
import './newbooks.css'
import { motion } from "framer-motion"


const NewBooks = ({ books }) => {

  const [width, setWidth] = useState(0)

  const carouselRef = useRef()


  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, [])

  
  const createStars = () => {
    let stars = [];
    let randomNumber = Math.floor(Math.random() * 4 + 1);
    for (let i = 0; i < randomNumber; i++) {
      stars.push(
        <li className="list-inline-item">
          <i className="fa fa-star"></i>
        </li>
      );
    }
    return stars;
  };



return (
  <div>
    <section className="Newbooks">
      <div className="container" id="novels">
        <div className="row">
          <div className="col-md-12 mx-auto">
            <h2>
              NEW  <b>Books</b>
            </h2>
            <motion.div ref={carouselRef} whileTap={{ cursor: "grabbing" }} className="carousel">
              <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className="inner-carousel">
                {books.map((book) => (
                  <motion.div className="item" key={book.id}>
                    <div className="imgBox" >
                      <img src={images[(book.id - 1)]} alt="bookimg" />
                      <div className="content">
                        <div className="name-price">
                          <Link to={`/bookdetails/${book.id}`} style={{ textDecoration: 'none' }}>
                            <h4>{book.name}</h4>
                          </Link>
                          <p className="item-price">
                            <strike>{book.price}$</strike>
                            <span>{book.price - (2)}$</span>
                          </p>
                        </div>
                        <div className="star-rating">
                          <ul className="list-inline">
                            {createStars()}
                          </ul>
                        </div>

                      </div>
                    </div>
                  </motion.div>
                ))}

              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  </div>
);
}




export default NewBooks;
