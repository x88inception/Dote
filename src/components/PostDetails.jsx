import { useParams } from "react-router-dom";
import { useContext } from "react";
import { postsContext } from "../App";
import "./compStyles.css";

export default function PostDetails() {
  const posts = useContext(postsContext);
  const { id } = useParams();
  if (!posts[id]) {
    return <h1>Post Not Found</h1>;
  }
  return (
    <div>
      <h1>Post Details</h1>
      <div className="post-card-details">
        <img
          src={`https://picsum.photos/seed/${id}/300/200`}
          alt="post"
          width="100%"
          height="auto"
        />
        <h2>{posts[id].title}</h2>
        <p>{posts[id].body}</p>
      </div>
    </div>
  );
}
