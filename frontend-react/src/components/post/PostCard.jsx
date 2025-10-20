import PostActions from "./PostActions";
import PostHeader from "./PostHeader";
import PostImage from "./PostImage";

const PostCard = ({ post }) => {
  const { user, createdAt, _id: postId, image, caption } = post;

  return (
    <article className="border-b pb-4 mb-4 max-w-[560px] mx-auto border rounded-md">
      <PostHeader postAuthor={user} createdAt={createdAt} />
      <PostImage postId={postId} postImage={image} caption={caption} />

      <PostActions post={post} />
    </article>
  );
};
export default PostCard;
