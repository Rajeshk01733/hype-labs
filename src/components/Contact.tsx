import React, { useMemo, useState } from "react";
import { motion, Variants } from "framer-motion";
import { useContactForm } from "../hooks/useContactForm";

type ContactFormData = {
  fullName: string;
  email: string;
  phone: string;
  businessName: string;
  businessSize: string;
  budget: string;
  message: string;
  interests: string[];
};

const scaleIn: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
    y: 20,
  },

  show: {
    opacity: 1,
    scale: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    businessSize: "",
    budget: "",
    message: "",
    interests: [],
  });

  const { handleSubmit, isLoading } = useContactForm({
    sectionName: "Contact Page - Main Contact Form",
    onSuccess: () => {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        businessName: "",
        businessSize: "",
        budget: "",
        message: "",
        interests: [],
      });
    },
    onError: (error) => {
      console.error("Contact form error:", error);
    },
  });

  const interestOptions = useMemo(
    () => [
      "Brand Management",
      "Website Design",
      "Website Development",
      "SEO",
      "Social Media",
      "Branding Strategy",
      "Ecommerce Website Production",
      "Infrastructure",
    ],
    [],
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleInterest = (value: string) => {
    setFormData((prev) => {
      const exists = prev.interests.includes(value);

      return {
        ...prev,
        interests: exists
          ? prev.interests.filter((item) => item !== value)
          : [...prev.interests, value],
      };
    });
  };

  const onFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Split name into first and last (or use full name as first if single word)
    const nameParts = formData.fullName
      .trim()
      .split(" ")
      .filter((part) => part.length > 0);

    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "-";

    try {
      await handleSubmit({
        firstName,
        lastName,
        email: formData.email,
        phone: formData.phone,
        businessName: formData.businessName,
        businessSize: formData.businessSize,
        budget: formData.budget,
        message: formData.message,
        services: formData.interests,
      });
    } catch (error) {
      // Error is already handled by useContactForm hook
      console.error("Form submission error:", error);
    }
  };

  return (
    <section id="contact" className="bg-black font-lato">
      {/* Contact Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-5xl px-4 pt-10 pb-12 text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
          Looking for reliable IT services?
        </h2>

        <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          Let’s discuss how we can support your business with tailored
          solutions. Connect with a trusted{" "}
          <span className="font-bold text-white">
            IT solutions company in Bangalore
          </span>{" "}
          and across India to get started.
        </p>
      </motion.div>

      <div className="mx-auto max-w-5xl px-4 pb-16 sm:px-6 sm:pb-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={scaleIn}
          className="rounded-[28px] border border-white/8 bg-[#090909] p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] sm:p-7"
        >
          <form onSubmit={onFormSubmit} className="space-y-5">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-medium text-white/70">
                  Full Name
                </label>

                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter Your Full Name"
                  className="h-12 w-full rounded-xl border border-white/8 bg-[#0D0D0D] px-4 text-sm text-white outline-none transition focus:border-white/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium text-white/70">
                  Email Address
                </label>

                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email Address"
                  className="h-12 w-full rounded-xl border border-white/8 bg-[#0D0D0D] px-4 text-sm text-white outline-none transition focus:border-white/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium text-white/70">
                  Phone No.
                </label>

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Your Phone No."
                  className="h-12 w-full rounded-xl border border-white/8 bg-[#0D0D0D] px-4 text-sm text-white outline-none transition focus:border-white/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium text-white/70">
                  Business Name
                </label>

                <input
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Enter Your Business Name"
                  className="h-12 w-full rounded-xl border border-white/8 bg-[#0D0D0D] px-4 text-sm text-white outline-none transition focus:border-white/20"
                />
              </div>
            </div>

            <div>
              <label className="mb-3 block text-xs font-medium text-white/70">
                I’m interested to help with
              </label>

              <div className="grid gap-3 sm:grid-cols-2">
                {interestOptions.map((option) => {
                  const checked = formData.interests.includes(option);

                  return (
                    <label
                      key={option}
                      className="flex cursor-pointer items-center gap-3 rounded-xl border border-white/8 bg-[#0D0D0D] px-4 py-3 text-sm text-white/80 transition hover:border-white/16"
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleInterest(option)}
                        className="h-4 w-4 accent-white"
                      />

                      <span>{option}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-medium text-white/70">
                  Business Size
                </label>

                <input
                  name="businessSize"
                  value={formData.businessSize}
                  onChange={handleChange}
                  placeholder="Small (1-10 employees)"
                  className="h-12 w-full rounded-xl border border-white/8 bg-[#0D0D0D] px-4 text-sm text-white outline-none transition focus:border-white/20"
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-medium text-white/70">
                  Business Budget
                </label>

                <input
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="15,000 AED - 25,000 AED"
                  className="h-12 w-full rounded-xl border border-white/8 bg-[#0D0D0D] px-4 text-sm text-white outline-none transition focus:border-white/20"
                />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-xs font-medium text-white/70">
                Message
              </label>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Additional Information"
                rows={5}
                className="w-full rounded-xl border border-white/8 bg-[#0D0D0D] px-4 py-3 text-sm text-white outline-none transition focus:border-white/20"
              />
            </div>

            <div className="pt-2">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isLoading}
                className="h-12 w-full cursor-pointer rounded-xl bg-white text-sm font-medium text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isLoading ? "Sending..." : "Submit Message"}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
