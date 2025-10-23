import { Link } from "react-router-dom";

const PrivacyNote = () => {
  return (
    <div className="mb-6">
      <p className="text-gray-500 text-sm">
        Certain profile info, like your name, bio and links, is visible to
        everyone.
        <Link to="#" className="text-blue-500">
          See what profile info is visible
        </Link>
      </p>
    </div>
  );
};
export default PrivacyNote;
