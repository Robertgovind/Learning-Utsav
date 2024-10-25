import React, { useState, useEffect } from "react";
import api from "../api/config.js";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [bookList, setBookList] = useState([]);
  const [serachText, setSearchText] = useState("");
  const [tempBookList, setTempBookList] = useState([]);
  useEffect(() => {
    async function getBooks() {
      const response = await api.get("/books");
      setBookList(response.data);
      setTempBookList(response.data);
    }
    getBooks();
  }, []);

  useEffect(() => {
    async function serachBooks() {
      const response = await api.get(`/books/search/all?q=${serachText}`);
      if (response.data) {
        setBookList(response.data);
      }
    }
    if (serachText) {
      serachBooks();
    } else {
      setBookList(tempBookList);
    }
  }, [serachText]);

  return (
    <>
      <center>
        <input
          type="text"
          placeholder="Search Books"
          style={{ width: "55%", margin: "10px", padding: "10px" }}
          value={serachText}
          onChange={(evt) => setSearchText(evt.target.value)}
        />
      </center>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        {bookList.length > 0
          ? bookList.map((book, index) => {
              return (
                <div
                  onClick={() =>
                    navigate("/explores", {
                      state: {
                        book,
                      },
                    })
                  }
                  key={index}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    textAlign: "center",
                    padding: "20px",
                    boxShadow: "0px 0px 5px ",
                    marginLeft: "15px",
                    marginTop: "15px",
                    width: "200px",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={book.image}
                    style={{
                      height: "200px",
                      width: "200px",
                      objectFit: "contain",
                    }}
                    alt="Book image"
                  />
                  <br />
                  {book.name}
                  <br />
                </div>
              );
            })
          : "Book not Found !!!"}{" "}
      </div>
    </>
  );
};

export default HomePage;
