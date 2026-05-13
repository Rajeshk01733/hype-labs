import {
  getCareersSubmissions,
  deleteCareersSubmission,
} from "@/api/careersSubmission";
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";

export const useCareersSubmissions = (page: number = 1, limit: number = 10) => {
  return useQuery({
    queryFn: () => getCareersSubmissions(page, limit),
    queryKey: ["careers-submission", page, limit],
    placeholderData: keepPreviousData,
  });
};

export const useDeleteCareersSubmission = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteCareersSubmission(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["careers-submission"] });
      toast.success("Careers submission deleted successfully");
    },
    onError: (error: any) => {
      console.error("Delete failed", error);
    },
  });
};
