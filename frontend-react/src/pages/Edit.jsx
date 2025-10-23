import { use } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Field from "../components/auth/Field";
import BioSection from "../components/edit/BioSection";
import ChangePassword from "../components/edit/ChangePassword";
import PrivacyNote from "../components/edit/PrivacyNote";
import ProfilePicture from "../components/edit/ProfilePicture";
import SelectGender from "../components/edit/SelectGender";
import WebsiteSection from "../components/edit/WebsiteSection";
import Input from "../components/ui/Input";
import Select from "../components/ui/Select";
import useAxios from "../hooks/useAxios";
import { AuthContext } from "../providers/AuthProvider";

const Edit = () => {
  const { user } = use(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm();
  const { api } = useAxios();
  const navigate = useNavigate();

  const { name, avatar, bio, _id, website, gender } = user;

  const onSubmit = async (formData) => {
    try {
      const response = await api.patch("/users/me", {
        ...formData,
      });

      if (response.status === 200) {
        reset();
        navigate();
      }
    } catch (error) {
      setError("root.random", {
        type: "random",
        message: `Failed to change your information, please try again. Error: ${error?.message}`,
      });
    }
  };

  return (
    <div className="edit-container">
      <h1 className="text-2xl font-bold mb-8">Edit profile</h1>

      <ProfilePicture avatar={avatar} name={name} />

      <form onSubmit={handleSubmit(onSubmit)}>
        <WebsiteSection website={website} error={errors.website}>
          <Input
            {...register("website")}
            type="text"
            className=" mb-2"
            defaultValue={website}
          />
        </WebsiteSection>

        <BioSection bio={bio} error={errors.bii}>
          <textarea
            {...register("bio")}
            className="form-input resize-none h-24 mb-1"
            defaultValue={bio}
            placeholder="Biography..."
          />
        </BioSection>

        <SelectGender gender={gender} error={errors.gender}>
          <Select {...register("gender")} defaultValue={gender}>
            <option value="null" disabled>
              Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="hide">Prefer not to say</option>
            <option value="other">Custom</option>
          </Select>
        </SelectGender>

        <ChangePassword />

        <PrivacyNote />

        <Field className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-100 text-blue-500 px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-200 transition"
          >
            Submit
          </button>
        </Field>
      </form>
      <div className="my-3 text-red-400 text-xs">
        {errors.root?.random && errors.root.random}{" "}
      </div>
    </div>
  );
};
export default Edit;
