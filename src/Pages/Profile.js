import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../Store/index";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = React.useState({
    name: "",
    email: "",
    bookQuantity: 0,
  });

  const userId = localStorage.getItem("user");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const fetchHandler = async () => {
    return axios
      .get(`https://bookstorebackend.onrender.com/user/${userId}`)
      .then((res) => {
        setUser({
          name: res.data.user.name,
          email: res.data.user.email,
          bookQuantity: res.data.user.books.length,
        });

        return res;
      });
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  const logout = () => {
    dispatch(authActions.logOut());
    navigate("/");
  };
  return (
    <>
      <Grid display="flex" justifyContent="center" alignItems="center">
        <List
          sx={{
            width: "100%",
            maxWidth: 360,
            bgcolor: "background.paper",
            margin: "3rem",
          }}
        >
          <ListItem>
            <h1>User Profile</h1>
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Name" secondary={user.name} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <EmailIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Email" secondary={user.email} />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <EmailIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary="Total Books" secondary={user.bookQuantity} />
          </ListItem>
        </List>
      </Grid>
      <Grid display="flex" justifyContent="center" alignItems="center">
        <Button variant="contained" color="error" onClick={logout}>
          Logout
        </Button>
      </Grid>
    </>
  );
};

export default Profile;
