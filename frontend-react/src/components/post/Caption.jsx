const Caption = ({ post }) => {
  return (
    <div className="px-3 mt-2">
      <p className="text-sm">
        <span className="font-semibold">{post.caption}</span>
        <span className="text-gray-500">... </span>
        <button className="text-gray-500 text-sm">more</button>
      </p>
    </div>
  );
};
export default Caption;
