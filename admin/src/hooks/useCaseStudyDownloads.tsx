import {
  deleteCaseStudyDownload,
  getCaseStudyDownloads,
} from "@/api/caseStudyDownloads";
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";

export const useCaseStudyDownloads = (page: number = 1, limit: number = 10) => {
  return useQuery({
    queryFn: () => getCaseStudyDownloads(page, limit),
    queryKey: ["case-study-download", page, limit],
    placeholderData: keepPreviousData,
  });
};

export const useDeleteCaseStudyDownload = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteCaseStudyDownload(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["case-study-download"] });
      toast.success("CaseStudyDownload deleted successfully");
    },
    onError: (error: any) => {
      console.error("Delete failed", error);
    },
  });
};
