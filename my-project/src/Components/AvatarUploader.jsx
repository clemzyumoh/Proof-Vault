import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";

const AvatarUploader = () => {
  const [avatar, setAvatar] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
      // Implement upload logic here
    }
  };

  return (
    <div className="relative w-32 h-32 mx-auto mb-4">
      <img
        src={avatar || "/default-avatar.png"}
        alt="User Avatar"
        className="w-full h-full rounded-full object-cover"
      />
      <label
        htmlFor="avatarUpload"
        className="absolute bottom-0 right-0 bg-white p-1 rounded-full cursor-pointer">
        <FaEdit />
      </label>
      <input
        type="file"
        id="avatarUpload"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
    </div>
  );
};

export default AvatarUploader;
