import './App.css';
import Axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/getPosts").then((response) => {
      setPostList(response.data);
    });
  }, []);

  return (
    <div className="App">
      <div className="Posts">
        {postList.map((post) => {
          return (
            <div className="Post" style={{ backgroundColor: "green" }}>
              <h1>{post.title}</h1>
              <h5>By {post.postedBy}</h5>
              <h5>Posted on {post.datePosted}</h5>
              <h2>{post.caption}</h2>
            </div>
          );
        })}
      </div>
    </div >
  );
}

export default App;
