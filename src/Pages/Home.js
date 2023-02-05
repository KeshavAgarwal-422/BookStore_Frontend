import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import HomePage from "../Lotti/HomePage.json";
import AnimationLottie from "../components/Animation";
import { Grid } from "@mui/material";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid display="flex" justifyContent="center" alignItems="center">
        <AnimationLottie animationPath={HomePage} />
      </Grid>
      <Grid display="flex" justifyContent="center" alignItems="center">
        <button
          class="btn btn-primary btn-lg"
          type="button"
          onClick={() => navigate("/books")}
        >
          View All books
        </button>
      </Grid>
    </>
    //   <>
    // <div class="position-absolute top-50 start-50 translate-middle">
    //
    //       {/*  */}
    //     </div>
    //   </>
  );
};

export default Home;
