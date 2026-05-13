import axiosInstance from "@/lib/axiosInstance";
import { TTestimonial } from "@/types/api";

export const postTestimonial = async (formData: TTestimonial) => {
  const res = await axiosInstance.post("/testimonials", formData);

  return res.data;
};

export const getTestimonials = async (page: number = 1, limit: number = 10) => {
  const res = await axiosInstance.get(
    `/testimonials/?limit=${limit}&page=${page}`,
  );
  return res.data;
};

export const updateTestimonial = async (formData: TTestimonial, id: string) => {
  const res = await axiosInstance.patch(`/testimonials/${id}`, formData);

  return res.data;
};

export const deleteTestimonial = async (id: string) => {
  const res = await axiosInstance.delete(`/testimonials/${id}`);

  return res.data;
};
