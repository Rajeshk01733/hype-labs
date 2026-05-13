import { updateProfile } from "@/api/superAdmin";
import InputLabel from "@/components/shared/InputLabel";
import { Button } from "@/components/ui/button";
import PageHeading from "@/layout/PageHeading";
import useAuthStore from "@/store/authStore";
import { TSuperAdmin } from "@/types/api";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

export default function Profile() {
  const { email, name, token, login } = useAuthStore();

  const [formData, setFormData] = useState({
    name: name || "",
    email: email || "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const { mutate, isPending } = useMutation({
    mutationFn: (payload: TSuperAdmin) => {
      if (!token) {
        throw new Error("Authentication token is missing.");
      }
      return updateProfile(payload, token);
    },
    onSuccess: (data) => {
      toast.success("Profile updated successfully!");
      const { name, email, token } = data?.data;
      login({ name, email, token });
      setFormData((prev) => ({ ...prev, password: "" }));
    },
    onError: (error: any) => {
      toast.error(
        error?.message || "An error occurred while updating the profile.",
      );
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { password, ...rest } = formData;
    const payload = password ? formData : rest;
    mutate(payload);
  };

  return (
    <>
      <PageHeading
        title="Profile"
        description="Add the profile details below. Click save when done."
      />
      <form className="space-y-7 py-5" onSubmit={handleSubmit}>
        <InputLabel
          label="Name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />

        <InputLabel
          label="Email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />

        <InputLabel
          label="Password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
        />

        <Button className="w-full" disabled={isPending}>
          Save
        </Button>
      </form>
    </>
  );
}
