import React from "react";
import { useLocation } from "react-router-dom";

export const Explores = () => {
  const book = useLocation().state.book;
  console.log(book);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        padding: "20px",
        boxShadow: "0px 0px 5px ",
        marginLeft: "15px",
        marginTop: "15px",
      }}
    >
      <center>
        <img
          src={book.image}
          style={{
            height: "280px",
            objectFit: "contain",
          }}
        />
      </center>
      <br />
      Book
      <small>{book.name}</small>
      <br />
      Author
      <small>{book.author}</small>
      <br />
      Genre
      <small>{book.genre}</small>
      <br />
      Description
      <small>{book.description}</small>
      <br />
    </div>
  );
};
