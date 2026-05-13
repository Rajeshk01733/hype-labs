import {
  deleteInsights,
  getInsights,
  postInsights,
  updateInsights,
} from "@/api/insights";
import { TInsights } from "@/types/api";
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";

export const useInsights = (page: number = 1, limit: number = 10) => {
  return useQuery({
    queryFn: () => getInsights(page, limit),
    queryKey: ["insights", page, limit],
    placeholderData: keepPreviousData,
  });
};

export const usePostInsights = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: TInsights) => postInsights(formData),
    onSuccess: () => {
      toast.success("Insights created successfully");
      queryClient.invalidateQueries({ queryKey: ["insights"] });
    },
    onError: (error: any) => {
      toast.error(
        error.response.data.message ||
          "An error occurred while creating testimonial",
      );
    },
  });
};

export const useUpdateInsights = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ formData, id }: { formData: TInsights; id: string }) =>
      updateInsights(formData, id),
    onSuccess: () => {
      toast.success("Insights updated successfully");
      queryClient.invalidateQueries({ queryKey: ["insights"] });
    },
    onError: (error: any) => {
      toast.error(
        error.response.data.message ||
          "An error occurred while updated testimonial",
      );
    },
  });
};

export const useDeleteInsights = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => deleteInsights(id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["insights"] });
      toast.success("Insights deleted successfully");
    },
    onError: (error: any) => {
      console.error("Delete failed", error);
    },
  });
};
