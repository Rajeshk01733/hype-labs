import { deleteEnquireForm, getEnquireForms } from "@/api/enquireForm";
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";

export const useEnquireForms = (page: number = 1, limit: number = 10) => {
  return useQuery({
    queryFn: () => getEnquireForms(page, limit),
    queryKey: ["enquire", page, limit],
    placeholderData: keepPreviousData,
  });
};

export const useDeleteEnquireForm = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteEnquireForm(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["enquire"] });
      toast.success("EnquireForm deleted successfully");
    },
    onError: (error: any) => {
      console.error("Delete failed", error);
    },
  });
};
