import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const Book = (book) => {
  const [book1, setBook1] = React.useState(book);

  const isLoggedIn = useSelector((state) => {
    return state.isLoggedIn;
  });

  if (isLoggedIn) {
    const fetchHandler = async () => {
      return await axios
        .get(`https://bookstorebackend.onrender.com/books/${book.book}`)
        .then((res) => {
          return setBook1(res.data);
        });
    };

    fetchHandler();
  }

  const { _id, name, author, available, description, price, image } =
    book1.book;

  const navigate = useNavigate();

  const deleteBook = () => {
    const sendRequest = async () => {
      return await axios
        .delete(`https://bookstorebackend.onrender.com/books/${_id}`)
        .then((res) => {
          return res.data;
        })
        .then(() => {
          navigate("/");
        });
    };
    sendRequest();
  };

  if (isLoggedIn) {
    return (
      <>
        <Card sx={{ width: 250, height: 420, margin: 2 }} id={_id}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="180"
            image={image}
            sx={{ objectFit: "fill" }}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <b>{name}</b>
            </Typography>
            <Typography gutterBottom variant="h7" component="div">
              <b> By {author}</b>
            </Typography>
            <Typography variant="body2" sx={{ height: 50 }}>
              {description}
            </Typography>
            <Typography
              gutterBottom
              variant="h7"
              component="div"
              sx={{ mt: 2 }}
            >
              <b>Rs {price}</b>
            </Typography>
          </CardContent>
          <CardActions>
            <Button LinkComponent={Link} to={`/UpdateBook/${_id}`} size="small">
              UPDATE
            </Button>

            <Button size="small" onClick={deleteBook}>
              DELETE
            </Button>
          </CardActions>
        </Card>
      </>
    );
  }

  return (
    <>
      <Card sx={{ width: 250, height: 420, margin: 2 }} id={_id}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="180"
          image={image}
          sx={{ objectFit: "fill" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            <b>{name}</b>
          </Typography>
          <Typography gutterBottom variant="h7" component="div">
            <b> By {author}</b>
          </Typography>
          <Typography variant="body2" sx={{ height: 50 }}>
            {description}
          </Typography>
          <Typography gutterBottom variant="h7" component="div" sx={{ mt: 2 }}>
            <b>Rs {price}</b>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
};

export default Book;
