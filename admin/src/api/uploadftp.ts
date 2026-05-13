import axios from "axios";

export const postUploadFtp = async (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await axios.post(
    `${import.meta.env.VITE_API_BASE_URL}/upload-ftp`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    },
  );

  return response.data;
};
