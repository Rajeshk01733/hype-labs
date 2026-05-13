import {
  deleteCareersOpening,
  getCareersOpenings,
  postCareersOpening,
  updateCareersOpening,
} from "@/api/careersOpening";
import { TCareersOpening } from "@/types/api";
import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { toast } from "sonner";

export const useCareersOpenings = (page: number = 1, limit: number = 10) => {
  return useQuery({
    queryFn: () => getCareersOpenings(page, limit),
    queryKey: ["careers-opening", page, limit],
    placeholderData: keepPreviousData,
  });
};

export const usePostCareersOpening = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (formData: TCareersOpening) => postCareersOpening(formData),
    onSuccess: () => {
      toast.success("CareersOpening created successfully");
      queryClient.invalidateQueries({ queryKey: ["careers-opening"] });
    },
    onError: (error: any) => {
      toast.error(
        error.response.data.message ||
          "An error occurred while creating testimonial",
      );
    },
  });
};

export const useUpdateCareersOpening = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ formData, id }: { formData: TCareersOpening; id: string }) =>
      updateCareersOpening(formData, id),
    onSuccess: () => {
      toast.success("CareersOpening updated successfully");
      queryClient.invalidateQueries({ queryKey: ["careers-opening"] });
    },
    onError: (error: any) => {
      toast.error(
        error.response.data.message ||
          "An error occurred while updated testimonial",
      );
    },
  });
};

export const useDeleteCareersOpening = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => deleteCareersOpening(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["careers-opening"] });
      toast.success("CareersOpening deleted successfully");
    },
    onError: (error: any) => {
      console.error("Delete failed", error);
    },
  });
};
