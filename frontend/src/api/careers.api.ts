import axiosInstance from "../lib/axiosInstance";

export const fetchCareers = async () => {
  const res = await axiosInstance.get("/careers?publish=true");

  return res.data.data;
};

export const fetchCareerBySlug = async (slug: string) => {
  const res = await axiosInstance.get(`/careers/${slug}`);

  return res.data.data;
};

export const searchCareers = async (query: string) => {
  const res = await axiosInstance.get(`/careers/search?query=${query}`);

  return res.data.data;
};

export const submitCareerApplication = async (formData: FormData) => {
  const res = await axiosInstance.post("/careers-submission", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};
