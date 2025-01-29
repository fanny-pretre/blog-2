import axios from "axios";

console.log("Cloudinary Name :", process.env.NEXT_PUBLIC_CLOUD_NAME);
console.log("Upload Preset :", process.env.NEXT_PUBLIC_UPLOAD_PRESET);

export const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", process.env.NEXT_PUBLIC_UPLOAD_PRESET);

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload`,
      formData
    );
    console.log("Cloudinary Response :", response.data);
    return response.data.secure_url; // URL de l'image
  } catch (error) {
    console.error(
      "Erreur lors de l'upload Cloudinary :",
      error.response?.data || error
    );
    throw error;
  }
};
