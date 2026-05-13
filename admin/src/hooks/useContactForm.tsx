import { deleteContactForm, getContactForms } from "@/api/contactForm";
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";

export const useContactForms = (page: number = 1, limit: number = 10) => {
  return useQuery({
    queryFn: () => getContactForms(page, limit),
    queryKey: ["contactForm", page, limit],
    placeholderData: keepPreviousData,
  });
};

export const useDeleteContactForm = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteContactForm(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["contactForm"] });
      toast.success("Contact form deleted successfully");
    },
    onError: (error: any) => {
      console.error("Delete failed", error);
    },
  });
};
