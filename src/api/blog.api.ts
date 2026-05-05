// src/api/blog.api.ts
import axios from "axios";
import type { BlogPost } from "../data/types";

const API = import.meta.env.VITE_API_BASE_URL;

// GET all blogs
export const fetchBlogs = async (): Promise<BlogPost[]> => {
  const res = await axios.get(`${API}/api/blogs`);
  return res.data;
};

// GET all case studies
export const fetchCaseStudies = async (): Promise<BlogPost[]> => {
  const res = await axios.get(`${API}/api/case-studies`);
  return res.data;
};

// GET single post by ID - Correct endpoint from your Postman request
export const fetchPostById = async (id: string): Promise<BlogPost> => {
  const res = await axios.get(`${API}/api/posts/${id}`);
  return res.data;
};