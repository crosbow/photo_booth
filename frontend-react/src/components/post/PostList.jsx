import { Suspense } from "react";
import PostCard from "./PostCard";

const PostList = ({ posts }) => {
  return (
    <div>
      {posts?.map((post) => (
        <Suspense key={post._id} fallback={<h2>Fetching post...</h2>}>
          <PostCard post={post} />
        </Suspense>
      ))}
    </div>
  );
};
export default PostList;
