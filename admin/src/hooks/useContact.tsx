import { getContacts, deleteContact } from "@/api/contact";
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";

export const useContacts = (page: number = 1, limit: number = 10) => {
  return useQuery({
    queryFn: () => getContacts(page, limit),
    queryKey: ["contacts", page, limit],
    placeholderData: keepPreviousData,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 1,
  });
};

export const useDeleteContact = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteContact(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
      toast.success("Contact deleted successfully");
    },
    onError: (error: any) => {
      console.error("Delete failed", error);
      toast.error("Failed to delete contact");
    },
  });
};
