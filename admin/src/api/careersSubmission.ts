import axiosInstance from "@/lib/axiosInstance";

export const getCareersSubmissions = async (
  page: number = 1,
  limit: number = 10,
) => {
  const res = await axiosInstance.get(
    `/careers-submission/?limit=${limit}&page=${page}`,
  );
  return res.data;
};

export const deleteCareersSubmission = async (id: string) => {
  const res = await axiosInstance.delete(`/careers-submission/${id}`);

  return res.data;
};
