import React, { useState } from "react";
import "../assets/sass/form.scss";
import api from "../api/config";

const AddBook = () => {
  const [formData, setFormData] = useState({});
  const [ImageData, setImageData] = useState();

  const handleChange = (evt) => {
    console.log(evt.target.value);
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const addBook = async (evt) => {
    evt.preventDefault();
    const response = await api.post(
      "/books/add",
      {
        ...formData,
        image: ImageData,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        onSubmit={addBook}
      >
        Book Name
        <input type="text" name="name" onChange={handleChange} />
        Author
        <input type="text" name="author" onChange={handleChange} />
        Genre
        <input type="text" name="genre" onChange={handleChange} />
        Description
        <textarea
          name="description"
          rows={10}
          onChange={handleChange}
        ></textarea>
        <input
          type="file"
          name="image"
          id=""
          onChange={(evt) => setImageData(evt.target.files[0])}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default AddBook;
