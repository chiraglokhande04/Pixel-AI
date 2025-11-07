// src/pages/BlogPage.jsx
import React, { useState, useEffect } from "react";
import { Calendar, ArrowLeft } from "lucide-react";

const apiUrl = import.meta.env.VITE_API_URL;

const fetchBlogs = async () => {
  try {
    // const res = await fetch(`${apiUrl}/api/blogs`);
    const res = await fetch(`https://iaimers-1.onrender.com/api/blogs`);
    if (!res.ok) throw new Error("Failed to fetch blogs");
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const fetchBlogById = async (id) => {
  const blogs = await fetchBlogs();
  return blogs.find((b) => b._id === id);
};

/* -------------------- Blog Card -------------------- */
const BlogCard = ({ blog, onClick }) => {
  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  return (
    <div
      onClick={() => onClick(blog._id)}
      className="cursor-pointer bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-indigo-500 hover:shadow-[0_0_20px_-4px_#4f46e5] transition-all"
    >
      <div className="overflow-hidden rounded-xl h-52 mb-4">
        <img
          src={blog.mainImage}
          alt={blog.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-xl font-semibold text-white line-clamp-2 hover:text-indigo-400 transition">
        {blog.title}
      </h3>
      <div className="flex items-center gap-2 text-gray-400 text-sm mt-3">
        <Calendar size={14} />
        <span>{formatDate(blog.createdAt)}</span>
      </div>
      <p className="text-gray-300 text-sm mt-3 line-clamp-3">
        {blog.content[0]?.paragraph[0] || "Click to read the full blog..."}
      </p>
    </div>
  );
};

/* -------------------- Blog Listing Page -------------------- */
const BlogListPage = ({ onBlogSelect }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    (async () => setBlogs(await fetchBlogs()))();
  }, []);

  return (
    <div className="pt-28 min-h-screen bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-6xl font-bold">
            Our <span className="text-indigo-500">Blogs</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mt-3">
            Insights, learnings, and thought leadership from our engineering & AI team.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} onClick={onBlogSelect} />
          ))}
        </div>

        {/* Empty State */}
        {blogs.length === 0 && (
          <p className="text-center text-gray-400 mt-20 text-lg">
            No blogs available at the moment.
          </p>
        )}
      </div>
    </div>
  );
};

/* -------------------- Blog Details Page -------------------- */
const BlogDetailPage = ({ blogId, onBack }) => {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    (async () => setBlog(await fetchBlogById(blogId)))();
  }, [blogId]);

  if (!blog) {
    return (
      <div className="pt-24 text-center text-gray-400 min-h-screen bg-gray-950">
        <button onClick={onBack} className="text-indigo-400 flex items-center gap-2 mx-auto hover:text-indigo-300">
          <ArrowLeft size={16} /> Back
        </button>
        <p className="mt-10">Blog not found</p>
      </div>
    );
  }

  return (
    <div className="pt-28 min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-6">

        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center text-indigo-400 hover:text-indigo-300 mb-8 transition group"
        >
          <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Blogs
        </button>

        {/* Blog Header */}
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{blog.title}</h1>
        <div className="flex items-center text-gray-400 mb-6">
          <Calendar size={18} className="mr-2" />
          {new Date(blog.createdAt).toLocaleDateString("en-US")}
        </div>

        <div className="rounded-2xl overflow-hidden border border-white/10 mb-10">
          <img src={blog.mainImage} alt={blog.title} className="w-full h-96 object-cover" />
        </div>

        {/* Blog Content */}
        <article className="prose prose-invert max-w-none">
          {blog.content.map((section, i) => (
            <section key={i} className="mb-12">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">{section.subHeading}</h2>

              {section.img && (
                <img src={section.img} alt="" className="rounded-xl border border-white/10 mb-5 w-full object-cover" />
              )}

              {section.paragraph?.map((p, idx) => (
                <p key={idx} className="text-gray-300 leading-relaxed mb-4">{p}</p>
              ))}
            </section>
          ))}
        </article>

         {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <button 
              onClick={onBack}
              className="bg-indigo-500 hover:bg-indigo-300 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Read More Articles
            </button>
          </div>
        </footer>

      </div>
    </div>
  );
};

/* -------------------- Main Component -------------------- */
export default function BlogPage() {
  const [page, setPage] = useState("list");
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  return page === "list" ? (
    <BlogListPage onBlogSelect={(id) => { setSelectedBlogId(id); setPage("detail"); }} />
  ) : (
    <BlogDetailPage blogId={selectedBlogId} onBack={() => setPage("list")} />
  );
}
