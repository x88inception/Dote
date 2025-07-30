import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

export default function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data));
  }, []);
  return (
    <>
      <h1>Posts</h1>
      <div style={{ width:"700px" ,marginLeft:"300px"}}>
        {posts.slice(0, 10).map((post) => {
          return (
            <div
              key={post.id}
              style={{
                color: "black",
                border: "2px solid blue",
                margin: "10px",
                padding: "10px",
                backgroundColor: "white",
              }}
            >
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
