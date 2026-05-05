import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin, Clock, Search,ChevronDown } from "lucide-react";
import { JOBS } from "../data/constants";

const Dropdown = ({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full shadow-sm text-sm text-gray-200 hover:border-purple-500/50 transition"
      >
        <span className="text-sm">{value || label}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-0 mt-3 w-40 bg-black border border-gray/10 rounded-2xl shadow-lg z-20 overflow-hidden">
          <button
            onClick={() => {
              onChange("");
              setOpen(false);
            }}
            className="w-full text-left px-4 py-3 hover:bg-white/5 transition text-gray-300"
          >
            All {label}
          </button>

          <div className="max-h-56 overflow-auto">
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={`w-full text-left px-4 py-3 hover:bg-white transition ${value === opt ? "bg-white/5 text-white" : "text-gray-400"}`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Careers: React.FC = () => {
  // search + filters
  const [query, setQuery] = useState("");
  const [department, setDepartment] = useState(""); // category/dept
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");

  // derive options from JOBS
  const departments = useMemo(() => {
    return Array.from(new Set(JOBS.map((j) => j.department))).filter(Boolean);
  }, []);

  const locations = useMemo(() => {
    return Array.from(new Set(JOBS.map((j) => j.location))).filter(Boolean);
  }, []);

  const types = useMemo(() => {
    return Array.from(new Set(JOBS.map((j) => j.type))).filter(Boolean);
  }, []);

  // filtered jobs
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return JOBS.filter((job) => {
      // search by title or department
      if (q) {
        const combined = `${job.title} ${job.department}`.toLowerCase();
        if (!combined.includes(q)) return false;
      }
      if (department && job.department !== department) return false;
      if (location && job.location !== location) return false;
      if (type && job.type !== type) return false;
      return true;
    });
  }, [query, department, location, type]);

  const hasActiveFilters = Boolean(query || department || location || type);

  return (
    <section id="careers" className="py-25 px-4 bg-linear-to-b from-neutral-900/50 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-16 mb-12">
          <motion.div
            initial={{opacity:0, x:-30}}
            whileInView={{opacity:1,x:0}}
            transition={{duration:1.2}} 
            className="ps-3 flex flex-col items-start justify-center"
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white my-6">
              Join the <span className="text-purple-500">Revolution</span>
            </h2>
            <p className="text-gray-400 text-md leading-relaxed mb-8 max-w-2xl">
              We are always looking for visionary creators, strategists, and developers who are ready to push boundaries. 
              If you're passionate about innovation, we want to hear from you.
            </p>
            <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300">
              View All Openings
            </button>
          </motion.div>

          {/* Filters column */}
          <div className="ps-3 items-start justify-center">
            <div className="flex flex-col gap-4">
              {/* search box */}
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="relative">
                  <Search
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search roles or department"
                    className="w-[300px] rounded-full bg-white/5 border border-white/10 py-3 pl-12 pr-4 text-gray-200 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  {query && (
                    <button
                      onClick={() => setQuery("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-400 hover:text-white"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* dropdown filters */}
                <div className="flex flex-wrap gap-3 items-center">
                  <Dropdown label="Department" value={department} options={departments} onChange={setDepartment} />
                  <Dropdown label="Job Type" value={type} options={types} onChange={setType} />
                  <Dropdown label="Location" value={location} options={locations} onChange={setLocation} />

                  {hasActiveFilters && (
                    <button
                     onClick={() => {
                        setQuery("");
                        setDepartment("");
                        setLocation("");
                        setType("");
                      }}
                      className="ml-2 px-4 py-2 text-sm rounded-full bg-white/5 border border-white/10 text-gray-200 hover:bg-white/10 transition"
                    >
                      Clear Filters
                    </button>
                  )}
                </div>
              </div>

              <motion.p 
                initial={{opacity:0, x:-30}}
                whileInView={{opacity:1,x:0}}
                transition={{duration:1.2}} 
                className="text-sm text-gray-400">
                Showing <span className="text-white font-medium">{filtered.length}</span> openings
              </motion.p>
            </div>
          </div>
        </div>

        {/* Jobs list */}
        <motion.div 
          initial={{opacity:0, y:30}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:1.2,delay:1}}
          className="space-y-4"
        >
          {filtered.length === 0 ? (
            <div className="p-6 rounded-xl bg-white/5 border border-white/10 text-gray-400">No jobs match your filters.</div>
          ) : (
            filtered.map((job) => (
              <div
                key={job.id}
                className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300 flex items-center justify-between cursor-pointer"
              >
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} /> {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} /> {job.type}
                    </span>
                  </div>
                </div>
                <a href={`/careers/${job.id}`} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-purple-600 group-hover:border-purple-600 transition-all">
                  <ArrowUpRight size={20} />
                </a>
              </div>
            ))
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Careers;
