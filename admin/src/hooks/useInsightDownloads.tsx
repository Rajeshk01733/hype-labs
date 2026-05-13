import {
  deleteInsightDownload,
  getInsightDownloads,
  postInsightDownload,
  updateInsightDownload,
} from "@/api/insightDownloads";
import { TInsightDownload } from "@/types/api";
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";

export const useInsightDownloads = (page: number = 1, limit: number = 10) => {
  return useQuery({
    queryFn: () => getInsightDownloads(page, limit),
    queryKey: ["insight-download", page, limit],
    placeholderData: keepPreviousData,
  });
};

export const usePostInsightDownload = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: TInsightDownload) => postInsightDownload(formData),
    onSuccess: () => {
      toast.success("InsightDownload created successfully");
      queryClient.invalidateQueries({ queryKey: ["insight-download"] });
    },
    onError: (error: any) => {
      toast.error(
        error.response.data.message ||
          "An error occurred while creating testimonial",
      );
    },
  });
};

export const useUpdateInsightDownload = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      formData,
      id,
    }: {
      formData: TInsightDownload;
      id: string;
    }) => updateInsightDownload(formData, id),
    onSuccess: () => {
      toast.success("InsightDownload updated successfully");
      queryClient.invalidateQueries({ queryKey: ["insight-download"] });
    },
    onError: (error: any) => {
      toast.error(
        error.response.data.message ||
          "An error occurred while updated testimonial",
      );
    },
  });
};

export const useDeleteInsightDownload = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteInsightDownload(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["insight-download"] });
      toast.success("InsightDownload deleted successfully");
    },
    onError: (error: any) => {
      console.error("Delete failed", error);
    },
  });
};
