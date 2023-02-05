import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Book from "../components/Book";
import { useSelector, useDispatch } from "react-redux";

const Books = () => {
  const isLoggedIn = useSelector((state) => {
    return state.isLoggedIn;
  });

  const [books, setBooks] = useState();

  const userId = localStorage.getItem("user");

  let url;

  if (isLoggedIn) {
    url = `https://bookstorebackend.onrender.com/books/user/${userId}`;
  } else if (!isLoggedIn) {
    url = "https://bookstorebackend.onrender.com/books";
  }

  const fetchHandler = async () => {
    return await axios.get(url).then((res) => {
      if (isLoggedIn) {
        return res.data;
      }

      return res.data;
    });
  };

  useEffect(() => {
    fetchHandler().then((data) => {
      setBooks(data.books);
    });
  }, []);

  return (
    <>
      <div class="d-flex flex-wrap" style={{ margin: `1rem` }}>
        {books &&
          books.map((book) => {
            return (
              <>
                <div>
                  <Book book={book} />
                </div>
              </>
            );
          })}
      </div>
    </>
  );
};

export default Books;
