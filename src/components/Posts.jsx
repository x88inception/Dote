import "./compStyles.css";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { postsContext } from "../App";
import ActionAreaCard from "./MuiTest";

export default function Posts() {
  const posts = useContext(postsContext);

  const postList = posts.map((post) => {
    return (
      <Link key={post.id} className="link" to={`/posts/postDetails/${post.id}`}>
        <ActionAreaCard post={post}/>
      </Link>
    );
  });

  return (
    <>
      <div className="search-container">
        <input type="text" placeholder="Search Posts" />
        <button>Search</button>
      </div>

      <div className="posts-container">{postList}</div>
    </>
  );
}
