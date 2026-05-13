import {
  deleteBrochureDownload,
  getBrochureDownloads,
  postBrochureDownload,
} from "@/api/brochureDownloads";
import { TBrochureDownload } from "@/types/api";
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";

export const useBrochureDownloads = (page: number = 1, limit: number = 10) => {
  return useQuery({
    queryFn: () => getBrochureDownloads(page, limit),
    queryKey: ["brochure-download", page, limit],
    placeholderData: keepPreviousData,
  });
};

export const usePostBrochureDownload = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: TBrochureDownload) => postBrochureDownload(formData),
    onSuccess: () => {
      toast.success("BrochureDownload created successfully");
      queryClient.invalidateQueries({ queryKey: ["brochure-download"] });
    },
    onError: (error: any) => {
      toast.error(
        error.response.data.message ||
          "An error occurred while creating testimonial",
      );
    },
  });
};

export const useDeleteBrochureDownload = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteBrochureDownload(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["brochure-download"] });
      toast.success("BrochureDownload deleted successfully");
    },
    onError: (error: any) => {
      console.error("Delete failed", error);
    },
  });
};
