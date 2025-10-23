import { useState } from "react";
import useAxios from "../../hooks/useAxios";
import Field from "../auth/Field";
import Input from "../ui/Input";

const ChangePassword = () => {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });
  const [errors, setErrors] = useState({
    currentPassword: null,
    newPassword: null,
    confirmNewPassword: null,
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [passStrongStatus, setPassStrongStatus] = useState("weak");
  const { api } = useAxios();

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    setPasswords((prev) => ({ ...prev, [field]: value }));

    // Implement how much new password strong
  };

  const handleUpdatePassword = async () => {
    // Check if currentPassword != newPassword
    // Check if newPassword == confirmNewPassword
    // Hit api and update new password
    // on error show the error message
    setErrors({
      currentPassword: null,
      newPassword: null,
      confirmNewPassword: null,
    });
    setSuccessMessage("");

    const { currentPassword, newPassword, confirmNewPassword } = passwords;
    if (currentPassword === newPassword) {
      setErrors((prev) => ({
        ...prev,
        newPassword: "Password should not same!",
      }));

      return;
    }
    if (newPassword !== confirmNewPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmNewPassword: "Password do not match",
      }));

      return;
    }

    try {
      const response = await api.patch("/users/me/password", {
        currentPassword,
        newPassword,
      });

      if (response.status === 200) {
        setSuccessMessage(response.data.message);

        setPasswords({
          currentPassword: "",
          newPassword: "",
          confirmNewPassword: "",
        });
      }
    } catch (error) {
      if (error?.response?.status == 400) {
        const message = error.response.data.message;

        setErrors((prev) => ({
          ...prev,
          newPassword: message,
        }));
      } else {
        setErrors((prev) => ({
          ...prev,
          newPassword: "Failed to change password",
        }));
      }
    }
  };
  return (
    <div className="bg-white rounded-lg  mb-6">
      <h2 className="font-medium text-lg mb-4">Change Password</h2>

      <Field label="Current Password" error={errors.currentPassword}>
        <Input
          type="password"
          name="currentPassword"
          className="pr-10"
          onChange={handleChange}
          placeholder="Enter your current password"
        />
      </Field>

      {/* New Password */}
      <div className="mb-4">
        <Field label="New Password" error={errors.newPassword}>
          <Input
            type="password"
            name="newPassword"
            className="pr-10 mb-1"
            onChange={handleChange}
            placeholder="Enter new password"
          />
        </Field>

        {/* Password Strength Indicator */}
        <div className="flex w-full h-1 mb-1">
          <div className="password-strength bg-red-500 w-1/4" />
          <div className="password-strength bg-orange-500 w-1/4" />
          <div className="password-strength bg-yellow-500 w-1/4" />
          <div className="password-strength bg-green-500 w-1/4" />
        </div>
        <p className="text-xs text-gray-500 mb-3">
          For a strong password, use at least 8 characters with a mix of
          letters, numbers, and symbols.
        </p>
      </div>

      {/* Confirm New Password */}
      <Field label="Confirm New Password" error={errors.confirmNewPassword}>
        <Input
          type="password"
          name="confirmNewPassword"
          className="pr-10 "
          onChange={handleChange}
          placeholder="Confirm new password"
        />
      </Field>

      <p className="my-2 text-green-500 text-xl"> {successMessage} </p>

      <button
        type="button"
        onClick={handleUpdatePassword}
        className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition"
      >
        Change Password
      </button>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          After changing your password, you'll be logged out of all devices
          except the ones you're using now.
        </p>
      </div>
    </div>
  );
};
export default ChangePassword;
