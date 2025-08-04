import Navbar from "./components/Navbar";
import Posts from "./components/Posts";
import Home from "./components/Home";
import Users from "./components/Users";
import Learn from "./components/Learn";
import { Routes, Route } from "react-router-dom";
import PostDetails from "./components/PostDetails";
import { useState, useEffect, createContext } from "react";
import axios from "axios";
import NotFound from "./components/NotFound";
import WithPosts from "./components/WithPosts";
import ActionAreaCard from "./components/MuiTest";

 export const postsContext = createContext([]);

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(response =>setPosts(response.data))
  }, []);
  

  return (

    <postsContext.Provider value={posts}>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />

        <Route path="/posts" element={<WithPosts/>}>
          <Route index element={<Posts />} />
          <Route path="postDetails/:id" element={<PostDetails />} />"
        </Route>

        <Route path="/users" element={<Users />} />
        <Route path="/learn" element={<Learn />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </postsContext.Provider>
  );
}
