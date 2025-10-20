const Edit = () => {
  return (
    <div className="edit-container">
      <h1 className="text-2xl font-bold mb-8">Edit profile</h1>
      {/* Profile Picture Section */}
      <div className="bg-white rounded-lg p-6 mb-6">
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
            <img
              src="./assets/users/user-1.png"
              alt="Saad Hasan"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-semibold text-base">Saad Hasan</h2>
            <p className="text-gray-500">@saadh393</p>
          </div>
          <button className="ml-auto bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition">
            Change photo
          </button>
        </div>
      </div>
      {/* Website Section */}
      <div className="bg-white rounded-lg p-6 mb-6">
        <label className="block mb-2 font-medium">Website</label>
        <input
          type="text"
          className="form-input mb-2"
          defaultValue="saadh393.github.io"
        />
        <p className="text-gray-500 text-xs">
          Editing your links is only available on mobile. Visit the PhotoBooth
          app and edit your profile to change the websites in your bio.
        </p>
      </div>
      {/* Bio Section */}
      <div className="bg-white rounded-lg p-6 mb-6">
        <label className="block mb-2 font-medium">Bio</label>
        <textarea
          className="form-input resize-none h-24 mb-1"
          defaultValue={"Pain Demands to be Felt"}
        />
        <div className="flex justify-end">
          <span className="text-gray-500 text-xs">23 / 150</span>
        </div>
      </div>
      {/* Gender Section */}
      <div className="bg-white rounded-lg p-6 mb-6">
        <label className="block mb-2 font-medium">Gender</label>
        <div className="relative">
          <select className="form-input appearance-none pr-8">
            <option>Male</option>
            <option>Female</option>
            <option>Prefer not to say</option>
            <option>Custom</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
        <p className="text-gray-500 text-xs mt-2">
          This won't be part of your public profile.
        </p>
      </div>
      {/* Password Change Section */}
      <div className="bg-white rounded-lg p-6 mb-6">
        <h2 className="font-medium text-lg mb-4">Change Password</h2>
        {/* Current Password */}
        <div className="mb-4">
          <label className="block mb-2 text-sm">Current Password</label>
          <div className="relative">
            <input
              type="password"
              className="form-input pr-10"
              placeholder="Enter your current password"
            />
            <button className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-sm">
              Show
            </button>
          </div>
        </div>
        {/* New Password */}
        <div className="mb-4">
          <label className="block mb-2 text-sm">New Password</label>
          <div className="relative">
            <input
              type="password"
              className="form-input pr-10 mb-1"
              placeholder="Enter new password"
            />
            <button className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-sm">
              Show
            </button>
          </div>
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
        <div className="mb-4">
          <label className="block mb-2 text-sm">Confirm New Password</label>
          <div className="relative">
            <input
              type="password"
              className="form-input pr-10"
              placeholder="Confirm new password"
            />
            <button className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 text-sm">
              Show
            </button>
          </div>
        </div>
        {/* Password Change Button */}
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-600 transition">
          Change Password
        </button>
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            After changing your password, you'll be logged out of all devices
            except the ones you're using now.
          </p>
        </div>
      </div>
      {/* Privacy Note */}
      <div className="mb-6">
        <p className="text-gray-500 text-sm">
          Certain profile info, like your name, bio and links, is visible to
          everyone.
          <a href="#" className="text-blue-500">
            See what profile info is visible
          </a>
        </p>
      </div>
      {/* Submit Button */}
      <div className="flex justify-end">
        <button className="bg-blue-100 text-blue-500 px-6 py-2 rounded-md text-sm font-medium hover:bg-blue-200 transition">
          Submit
        </button>
      </div>
    </div>
  );
};
export default Edit;
