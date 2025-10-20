import {
  CommentIcon,
  HeartOutlineIcon,
  SendIcon,
  ShareIcon,
} from "../../assets";
import Likes from "../../assets/icons/Likes";
import Caption from "./Caption";

const PostActions = ({ post }) => {
  return (
    <>
      <div className="flex justify-between p-3">
        <div className="flex space-x-4">
          <button className="like-button">
            <HeartOutlineIcon />
          </button>
          <button>
            <CommentIcon />
          </button>
        </div>
        <button>
          <ShareIcon />
        </button>
      </div>
      <Likes />
      <Caption post={post} />
      {/* Comments */}
      <div className="px-3 mt-1">
        <button className="text-gray-500 text-sm">View all 2 comments</button>
      </div>
      {/* Add Comment */}
      <div className="px-3 mt-2 flex justify-between items-center">
        <input
          type="text"
          placeholder="Add a comment..."
          className="text-sm w-full outline-none"
        />
        <SendIcon />
      </div>
    </>
  );
};
export default PostActions;
