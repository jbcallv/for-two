import "../styles/App.css";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ListItem from '@mui/material/ListItem';
import { Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

function App() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getPosts").then((response) => {
      setPostList(response.data);
    });
  }, []);

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        container
        item
        justifyContent="center"
        alignItems="center"
        direction="column">
        <Box
          bgcolor="#FBFAF5"
          minHeight="100vh"
          width="45vw"
          maxWidth="750px"
          minWidth="360px"
        >
          {postList.map((post) => {
            return (
              <ListItem>
                <Box>
                  <Typography variant="h4" marginLeft={5} marginTop={2}>{post.title}</Typography>
                  <Typography variant="subtitle1" marginLeft={7}>{post.postedBy}</Typography>
                  <Typography variant="subtitle1" marginLeft={7}>{post.datePosted}</Typography>
                  <Divider variant="middle" width="95%" />
                  <Typography variant="body1" marginLeft={5} marginRight={5} marginTop={2} marginBottom={2}>{post.caption}</Typography>
                  <Divider color="#000000" />
                </Box>
              </ListItem>
            );
          })}

          <Grid
            container
            item
            justifyContent="center"
            marginBottom={2}
            alignItems="center">
            <Button
              variant="contained"
              href="/CreatePost.js"
              sx={{
                backgroundColor: "#353935",
                borderRadius: 3,
                textTransform: "none"
              }}
            >
              Create
            </Button>
          </Grid>

        </Box>
      </Grid>
    </Grid >
  );
}

export default App;
