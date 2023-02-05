import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const AddBook = () => {
  const [name, setName] = useState();
  const [author, setAuthor] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [available, setAvailable] = useState();
  const [image, setImage] = useState();

  const userId = localStorage.getItem("user");

  const navigate = useNavigate();

  const url = "https://bookstorebackend.onrender.com/books";

  const sendRequest = async () => {
    return await axios
      .post(url, {
        name: name,
        author: author,
        description: description,
        price: price,
        available: available,
        image: image,
        user: userId,
      })
      .then((res) => {
        return res.data;
      });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleAvailableChange = (e) => {
    setAvailable(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(console.log("Book added Successfully"));
    e.target.reset();
    navigate("/books");
  };
  return (
    <>
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="form">
          <h4>Please enter book info....</h4>
          <br />
          <form onSubmit={handleSubmit}>
            <div class="mb-5">
              <label for="text" class="form-label">
                Name
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                onChange={handleNameChange}
              />
              <label for="text" class="form-label">
                Author
              </label>
              <input
                type="text"
                class="form-control"
                id="author"
                onChange={handleAuthorChange}
              />
              <label for="text" class="form-label">
                Description
              </label>
              <input
                type="text"
                class="form-control"
                id="description"
                onChange={handleDescriptionChange}
              />
              <label for="text" class="form-label">
                Price(in Rs)
              </label>
              <input
                type="text"
                class="form-control"
                id="price"
                onChange={handlePriceChange}
              />
              <label for="text" class="form-label">
                Image
              </label>
              <input
                type="text"
                class="form-control"
                id="image"
                onChange={handleImageChange}
              />
              <label for="text" class="form-label">
                Available
              </label>
              <input
                type="text"
                class="form-control"
                id="available"
                onChange={handleAvailableChange}
              />
            </div>
            <div class="d-grid gap-1 col-14 mx-auto my-auto">
              <button type="submit" class="btn btn-primary">
                Add Book
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddBook;
