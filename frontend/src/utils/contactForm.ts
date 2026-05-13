import axios from "axios";

export interface ContactFormPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  businessName?: string;
  businessSize?: string;
  budget?: string;
  message?: string;
  services?: string[];
  websiteAddress?: string;
  companyName?: string;
  sourcePage: string;
  sourcePath: string;
  sectionName: string;
  additionalData?: Record<string, any>;
}

/**
 * Extract source information from the current page
 * @param sectionName - Name of the form section/component
 * @returns Source tracking data
 */
export const getSourceInfo = (sectionName: string) => {
  const pathname = window.location.pathname;
  const pageTitle =
    document.title || pathname.split("/").pop() || "Unknown Page";

  return {
    sourcePage: pageTitle,
    sourcePath: pathname,
    sectionName,
  };
};

/**
 * Submit contact form to backend
 * @param data - Form data to submit
 * @returns Promise with API response
 */
export const submitContactForm = async (data: ContactFormPayload) => {
  try {
    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
    const response = await axios.post(`${apiBaseUrl}/api/contact`, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return {
      success: true,
      data: response.data,
    };
  } catch (error: any) {
    console.error("Contact form submission error:", error);
    return {
      success: false,
      error: error.response?.data?.message || "Failed to submit form",
    };
  }
};

/**
 * Helper to sanitize phone number for WhatsApp
 * Removes all non-digit characters
 * @param phone - Phone number to sanitize
 * @returns Sanitized phone number
 */
export const sanitizePhoneForWhatsApp = (phone: string): string => {
  return phone.replace(/\D/g, "");
};
