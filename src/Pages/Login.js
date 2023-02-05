import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../Store";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isLoggedIn = useSelector((state) => {
    return state.isLoggedIn;
  });

  const dispatch = useDispatch();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const fetchHandler = async () => {
    return axios
      .post("https://bookstorebackend.onrender.com/user/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        return res.data;
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchHandler()
      .then((res) => {
        console.log(res);
        dispatch(authActions.login());
        localStorage.setItem("user", res.id);
      })
      .then(() => {
        navigate("/books");
      });
    e.target.reset();
  };
  return (
    <>
      <div class="position-absolute top-50 start-50 translate-middle">
        <div className="form">
          <h3 className="position-absolute top-0 start-50 translate-middle-x mt-3">
            Login
          </h3>

          <form onSubmit={handleSubmit}>
            <div class="mb-3">
              <label class="form-label">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
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
                type="submit"
                class="btn btn-outline-primary "
                style={{ borderRadius: "12px" }}
              >
                Login
              </button>
              <button
                type="btn"
                class="btn btn-outline-primary"
                style={{ borderRadius: "12px" }}
                onClick={() => {
                  navigate("/signUp");
                }}
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

export default Login;
