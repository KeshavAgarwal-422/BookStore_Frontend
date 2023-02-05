import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../Store";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => {
    return state.isLoggedIn;
  });

  const dispatch = useDispatch();

  const fetchHandler = async () => {
    return await axios
      .post("https://bookstorebackend.onrender.com/user/signup", {
        name: name,
        email: email,
        password: password,
      })
      .then((res) => {
        return res.data;
      });
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchHandler().then((res) => {
      dispatch(authActions.login());
      localStorage.setItem("user", res.id);
    });
    navigate("/books");
    e.target.reset();
  };
  return (
    <>
      <div class="position-absolute top-50 start-50 translate-middle">
        <div className="form">
          <h3 className="position-absolute top-0 start-50 translate-middle-x mt-3">
            SignUp
          </h3>

          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label class="form-label">Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputName"
                aria-describedby="emailHelp"
                onChange={handleNameChange}
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail"
                onChange={handleEmailChange}
              />
            </div>
            <div class="mb-3">
              <label class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                onChange={handlePasswordChange}
              />
            </div>
            <div class="d-grid gap-1 col-14 mx-auto my-auto">
              <button
                type="btn"
                class="btn btn-outline-primary "
                style={{ borderRadius: "12px" }}
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>

              <button
                type="submit"
                class="btn btn-outline-primary"
                style={{ borderRadius: "12px" }}
              >
                SignUp
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
