import axiosInstance from "@/lib/axiosInstance";

export const getNewsletterSubs = async (
  page: number = 1,
  limit: number = 10,
) => {
  const res = await axiosInstance.get(
    `/newsletter-subscribers/?${limit}&page=${page}`,
  );
  return res.data;
};

export const deleteNewsletterSub = async (id: string) => {
  const res = await axiosInstance.delete(`/newsletter-subscribers/${id}`);

  return res.data;
};
