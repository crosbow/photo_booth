import { use, useRef } from "react";
import ProfileIcon from "../../assets/icons/ProfileIcon";
import useAxios from "../../hooks/useAxios";
import { AuthContext } from "../../providers/AuthProvider";
import get_img_url from "../../utils/get_img_url";

const ProfilePicture = ({ avatar, name }) => {
  const imgRef = useRef(null);
  const { setAuth } = use(AuthContext);
  const { api } = useAxios();

  const updateAvatar = async (avatarBuffer) => {
    try {
      const formData = new FormData();
      formData.append("avatar", avatarBuffer);

      const response = await api.patch("/users/me/avatar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data?.user?.avatar;
    } catch (error) {
      console.log(error);
    }
  };

  const handleUploadImage = () => {
    imgRef.current.click();

    imgRef.current.addEventListener("change", async (e) => {
      const imgBuffer = e.target.files[0];
      const updatedAvatar = await updateAvatar(imgBuffer);

      setAuth((prev) => ({
        ...prev,
        user: { ...prev.user, avatar: updatedAvatar },
      }));
    });
  };

  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <div className="flex items-center">
        {avatar ? (
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            <img
              src={get_img_url(avatar)}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="mr-3 bg-gray-300 p-3 rounded-full">
            <ProfileIcon />
          </div>
        )}
        <div>
          <h2 className="font-semibold text-base">{name}</h2>
        </div>

        <input ref={imgRef} type="file" accept="image/*" hidden />

        <button
          type="button"
          onClick={handleUploadImage}
          className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition"
        >
          Change photo
        </button>
      </div>
    </div>
  );
};
export default ProfilePicture;
