import React, { useState } from "react";

import { useParams } from "react-router-dom";

import { useQuery } from "@tanstack/react-query";

import { motion } from "framer-motion";

import { fetchCareerBySlug, submitCareerApplication } from "../api/careers.api";

const CareerDetails = () => {
  const { slug } = useParams();

  const { data: job, isLoading } = useQuery({
    queryKey: ["career", slug],

    queryFn: () => fetchCareerBySlug(slug!),

    enabled: !!slug,
  });

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    coverLetter: "",
  });

  const [resume, setResume] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!job) return;

    try {
      setLoading(true);

      const payload = new FormData();

      payload.append("careerId", job._id);

      payload.append("fullName", formData.fullName);

      payload.append("email", formData.email);

      payload.append("phone", formData.phone);

      payload.append("coverLetter", formData.coverLetter);

      if (resume) {
        payload.append("resume", resume);
      }

      await submitCareerApplication(payload);

      alert("Application submitted successfully");

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        coverLetter: "",
      });

      setResume(null);
    } catch (error) {
      console.error(error);

      alert("Failed to submit application");
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) {
    return <div className="text-white py-40 text-center">Loading...</div>;
  }

  if (!job) {
    return <div className="text-white py-40 text-center">Job not found</div>;
  }

  return (
    <section className="py-27 px-6 bg-gradient-to-b from-neutral-900/50 to-black text-white">
      <motion.h1
        initial={{
          opacity: 0,
          x: -30,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        className="text-4xl font-semibold tracking-wide mt-5 mb-15"
      >
        {job.title}
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Job Overview</h3>

            <p className="text-gray-300 leading-relaxed">{job.description}</p>
          </div>

          <div className="space-y-2 text-gray-300">
            <p>
              <strong>Department:</strong> {job.department}
            </p>

            <p>
              <strong>Location:</strong> {job.location}
            </p>

            <p>
              <strong>Type:</strong> {job.jobType}
            </p>

            <p>
              <strong>Salary:</strong> {job.salary}
            </p>
          </div>
        </div>

        <motion.div
          initial={{
            opacity: 0,
            x: 30,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          className="rounded-xl bg-neutral-800 shadow-xl"
        >
          <div className="p-8 flex flex-col gap-6">
            <h2 className="text-xl font-bold">Apply for this position</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                required
                placeholder="Full Name"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    fullName: e.target.value,
                  })
                }
                className="rounded-md bg-neutral-700 px-3 py-3"
              />

              <input
                type="email"
                required
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  })
                }
                className="rounded-md bg-neutral-700 px-3 py-3"
              />

              <input
                type="tel"
                required
                placeholder="Phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    phone: e.target.value,
                  })
                }
                className="rounded-md bg-neutral-700 px-3 py-3"
              />

              <textarea
                rows={5}
                required
                placeholder="Cover Letter"
                value={formData.coverLetter}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    coverLetter: e.target.value,
                  })
                }
                className="rounded-md bg-neutral-700 px-3 py-3"
              />

              <input
                type="file"
                required
                accept=".pdf,.doc,.docx"
                onChange={(e) => setResume(e.target.files?.[0] || null)}
                className="text-sm"
              />

              <button
                type="submit"
                disabled={loading}
                className="mt-2 bg-purple-600 hover:bg-purple-700 transition rounded-full py-3 font-semibold"
              >
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerDetails;
