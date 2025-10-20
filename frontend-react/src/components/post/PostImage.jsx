import { Link } from "react-router-dom";
import get_img_url from "../../utils/get_img_url";

const PostImage = ({ postImage, postId, caption }) => {
  return (
    <div className="relative">
      <Link to={`/details/${postId}`}>
        <img
          src={get_img_url(postImage)}
          alt={caption}
          className="w-full object-cover max-h-[1000px]"
        />
      </Link>
    </div>
  );
};
export default PostImage;
