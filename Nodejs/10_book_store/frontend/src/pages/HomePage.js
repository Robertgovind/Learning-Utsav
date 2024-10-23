import React, { useState, useEffect } from "react";
import api from "../api/config.js";

const HomePage = () => {
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    async function getBooks() {
      const response = await api.get("/books");
      setBookList(response.data);
    }
    getBooks();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
      }}
    >
      {bookList.map((book, index) => {
        return (
          <div
            key={index}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "20px",
              boxShadow: "0px 0px 5px ",
              marginLeft: "15px",
              marginBottom: "10px",
              width: "200px",
            }}
          >
            <img
              src={book.image}
              style={{ height: "200px", width: "200px", objectFit: "contain" }}
            />
            <br />
            {book.name}
            <br />
            {book.author}
            <br />
            {book.genre}
            <br />
            {book.description}
            <br />
          </div>
        );
      })}{" "}
    </div>
  );
};

export default HomePage;
