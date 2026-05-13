import {
  deleteCaseStudy,
  getCaseStudy,
  postCaseStudy,
  updateCaseStudy,
} from "@/api/caseStudy";

import { TCaseStudy } from "@/types/api";

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { toast } from "sonner";

export const useCaseStudy = (
  page: number = 1,
  limit: number = 10,
) => {
  return useQuery({
    queryFn: () => getCaseStudy(page, limit),

    queryKey: ["case-study", page, limit],

    placeholderData: keepPreviousData,

    retry: false,

    staleTime: 1000 * 60,
  });
};

export const usePostCaseStudy = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: TCaseStudy) =>
      postCaseStudy(formData),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["case-study"],
      });

      toast.success(
        "CaseStudy created successfully",
      );
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ||
          "An error occurred while creating testimonial",
      );
    },
  });
};

export const useUpdateCaseStudy = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      formData,
      id,
    }: {
      formData: TCaseStudy;
      id: string;
    }) => updateCaseStudy(formData, id),

    onSuccess: () => {
      toast.success(
        "CaseStudy updated successfully",
      );

      queryClient.invalidateQueries({
        queryKey: ["case-study"],
      });
    },

    onError: (error: any) => {
      toast.error(
        error?.response?.data?.message ||
          "An error occurred while updated testimonial",
      );
    },
  });
};

export const useDeleteCaseStudy = () => {
  // FIXED HERE
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) =>
      deleteCaseStudy(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["case-study"],
      });

      toast.success(
        "CaseStudy deleted successfully",
      );
    },

    onError: (error: any) => {
      console.error("Delete failed", error);

      toast.error(
        error?.response?.data?.message ||
          "Failed to delete case study",
      );
    },
  });
};