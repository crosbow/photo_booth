import { Link } from "react-router-dom";
import get_img_url from "../../utils/get_img_url";

const PostHeader = ({ postAuthor, createdAt }) => {
  const { avatar, _id, name } = postAuthor;

  const profilePath = `/profile/${_id}`;
  return (
    <div className="flex items-center p-3">
      <Link
        to={profilePath}
        className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center text-white text-xs"
      >
        <img src={get_img_url(avatar)} className="w-full h-full object-cover" />
      </Link>
      <div className="ml-2">
        <Link to={profilePath} className="font-semibold text-sm">
          {name}
        </Link>
        <span className="text-gray-500 text-xs"> • 6m</span>
      </div>
    </div>
  );
};
export default PostHeader;
