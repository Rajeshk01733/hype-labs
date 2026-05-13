import { useState } from "react";
import {
  submitContactForm,
  getSourceInfo,
  ContactFormPayload,
} from "../utils/contactForm";

interface UseContactFormOptions {
  sectionName: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export const useContactForm = (options: UseContactFormOptions) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (
    formData: Omit<
      ContactFormPayload,
      "sourcePage" | "sourcePath" | "sectionName"
    >,
  ) => {
    try {
      setIsLoading(true);
      setError(null);
      setSuccess(false);

      // Get source information
      const sourceInfo = getSourceInfo(options.sectionName);

      // Merge form data with source info
      const payload: ContactFormPayload = {
        ...formData,
        ...sourceInfo,
      };

      // Submit form
      const result = await submitContactForm(payload);

      if (result.success) {
        setSuccess(true);
        options.onSuccess?.();
        return result.data;
      } else {
        const errorMsg = result.error || "Failed to submit form";
        setError(errorMsg);
        options.onError?.(errorMsg);
        throw new Error(errorMsg);
      }
    } catch (err: any) {
      const errorMsg =
        err.message || "An error occurred while submitting the form";
      setError(errorMsg);
      options.onError?.(errorMsg);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    handleSubmit,
    isLoading,
    error,
    success,
  };
};
