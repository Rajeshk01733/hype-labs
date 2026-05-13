import axiosInstance from "@/lib/axiosInstance";

export const getCaseStudyDownloads = async (
  page: number = 1,
  limit: number = 10,
) => {
  const res = await axiosInstance.get(
    `/case-study-download/?limit=${limit}&page=${page}`,
  );
  return res.data;
};

export const deleteCaseStudyDownload = async (id: string) => {
  const res = await axiosInstance.delete(`/case-study-download/${id}`);

  return res.data;
};
