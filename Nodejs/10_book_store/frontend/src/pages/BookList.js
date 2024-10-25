import { useState, useEffect } from "react";
import React from "react";
import api from "../api/config";
import { FaTrashAlt } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const BookList = () => {
  const [bookList, setBookList] = useState([]);

  // Fetch books when the component mounts
  useEffect(() => {
    async function getBooks() {
      try {
        const response = await api.get("/books");
        if (response.data) {
          setBookList(response.data);
        }
      } catch (err) {
        toast.error("Failed to fetch books");
      }
    }
    getBooks();
  }, []);

  // Delete book function
  const deleteBook = async (id, index) => {
    try {
      const confirmation = window.confirm("Do you want to delete this item?");
      if (confirmation) {
        const response = await api.delete(`/books/delete/${id}`);
        if (response.data) {
          toast.success("Book deleted");
          // Update the book list by removing the deleted item
          setBookList((prevList) => prevList.filter((_, i) => i !== index));
        } else {
          toast.error("Cannot delete the book");
        }
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  // Render the component
  return (
    <center>
      <ToastContainer />
      {bookList.length > 0
        ? bookList.map((book, index) => (
            <div
              key={index}
              style={{
                boxShadow: "0px 0px 7px rgb(34, 0, 128)",
                width: "40%",
                margin: "10px",
                padding: "10px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {book.name}
              <FaTrashAlt
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => deleteBook(book.id, index)}
              />
            </div>
          ))
        : "No books Found"}
    </center>
  );
};
