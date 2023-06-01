import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookDetail from "./BookDetail";
const BookList = () => {
  const { books } = useContext(BookContext);

  return books.length ? (
    <div className="card">
      {books.map((book) => {
        return <BookDetail book={book} key={book.id} />;
      })}
    </div>
  ) : (
    
  );
};
export default BookList;
