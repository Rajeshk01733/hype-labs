import axiosInstance from "@/lib/axiosInstance";

export const getBrochure = async () => {
  const res = await axiosInstance.get(`/brochure`);
  return res.data;
};

export const updateBrochure = async (filePath: string, id: string) => {
  const res = await axiosInstance.patch(`/brochure/${id}`, {
    filePath: filePath,
  });

  return res.data;
};
