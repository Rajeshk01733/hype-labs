import { useParams } from "react-router-dom";
import { JOBS } from "../data/constants";
import { motion } from 'framer-motion';

const CareerDetails = () => {
  const { id } = useParams();
  const job = JOBS.find((j) => j.id === Number(id));

  if (!job) {
    return <p className="text-white p-6">Job not found.</p>;
  }

  return (
    <section className="py-27 px-6 bg-gradient-to-b from-neutral-900/50 to-black text-white">
      <motion.h1 
        initial={{opacity:0, x:-30}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1.2}}
        className="text-4xl font-semibold tracking-wide mt-5 mb-15">
        {job.title}
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">Company Overview</h3>
            <p className="text-gray-300 leading-relaxed">
              `We are a dynamic and rapidly growing digital media company based in Dubai, 
              dedicated to producing high-quality content across various platforms. 
              Our team values creativity, innovation, and a passion for storytelling. 
              We are currently seeking a talented <span className="font-bold">{job.title}</span> to join our expanding
              team and oversee the efficient execution of projects, 
              ensuring smooth workflows and timely delivery of high-quality content.`
            </p>
          </div>

          <div className="space-y-2 text-gray-300">
            <p><strong>Department:</strong> {job.department}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p><strong>Type:</strong> {job.type}</p>
          </div>
        </div>

        {/* APPLY FORM */}
        <motion.div 
          initial={{opacity:0, x:30}}
          whileInView={{opacity:1,x:0}}
          transition={{duration:1.2}}
          className="rounded-xl bg-neutral-800 shadow-xl"
        >
          <div className="p-8 flex flex-col gap-6">
            <h2 className="text-xl font-bold">Apply for this position</h2>

            <form className="flex flex-col gap-4">
              {/* Full Name */}
              <div className="flex flex-col gap-1">
                <label htmlFor="fullname">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="fullname"
                  type="text"
                  required
                  className="rounded-md bg-neutral-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1">
                <label htmlFor="email">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="rounded-md bg-neutral-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1">
                <label htmlFor="phone">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  className="rounded-md bg-neutral-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Cover Letter */}
              <div className="flex flex-col gap-1">
                <label htmlFor="coverletter">
                  Cover Letter <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="coverletter"
                  rows={5}
                  required
                  className="rounded-md bg-neutral-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* File Upload */}
              <div className="flex flex-col gap-2">
                <label>
                  Upload CV / Resume <span className="text-red-500">*</span>
                </label>
                <input
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  className="text-sm bg-neutral-700 text-gray-300
                    file:bg-gray-300  file:text-black file:font-semibold
                    file:border-0 file:px-4 file:py-2
                    file:rounded-md file:cursor-pointer"
                />
                <p className="text-xs text-gray-400">
                  Allowed types: PDF, DOC, DOCX
                </p>
              </div>

              <div className="flex items-start gap-3">
                <input
                    id="consent"
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-white/30 bg-neutral-700 
                               text-purple-600 focus:ring-purple-500"
                />
                <label htmlFor="consent" className="text-xs text-gray-400 leading-relaxed">
                  By using this form you agree with the storage and handling of your data by this website.
                  <span className="text-red-500"> *</span>
                </label>
                </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-2 bg-neutral-700 hover:bg-neutral-600 transition rounded-full py-3 font-semibold"
              >
                Submit Application
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerDetails;
