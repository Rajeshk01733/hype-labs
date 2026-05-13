import { getBrochure, updateBrochure } from "@/api/brochure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useBrochure = () => {
  return useQuery({
    queryFn: () => getBrochure(),
    queryKey: ["brochure"],
  });
};

export const useUpdateBrochure = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ filePath, id }: { filePath: string; id: string }) =>
      updateBrochure(filePath, id),
    onSuccess: () => {
      toast.success("Brochure updated successfully");
      queryClient.invalidateQueries({ queryKey: ["brochure"] });
    },
    onError: (error: any) => {
      toast.error(
        error.response.data.message ||
          "An error occurred while updated testimonial",
      );
    },
  });
};
