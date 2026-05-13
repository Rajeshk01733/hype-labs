import axiosInstance from "@/lib/axiosInstance";
import { TBrochureDownload } from "@/types/api";

export const postBrochureDownload = async (formData: TBrochureDownload) => {
  const res = await axiosInstance.post("/brochure-download", formData);

  return res.data;
};

export const getBrochureDownloads = async (
  page: number = 1,
  limit: number = 10,
) => {
  const res = await axiosInstance.get(
    `/brochure-download/?limit=${limit}&page=${page}`,
  );
  return res.data;
};

export const deleteBrochureDownload = async (id: string) => {
  const res = await axiosInstance.delete(`/brochure-download/${id}`);

  return res.data;
};
