import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2 } from 'lucide-react';
const apiUrl = import.meta.env.VITE_API_URL;
import AddForm from './AddForm'; 
import EditForm from './EditForm';

const BlogManagement = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/blogs`);
      if (response.ok) {
        const blogsData = await response.json();
        setBlogs(blogsData.data);
      } else {
        console.error('Failed to fetch blogs');
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleBlogAdded = (newBlog) => {
    setBlogs(prev => [newBlog, ...prev]);
  };

  const handleBlogUpdated = (updatedBlog) => {
    setBlogs(prev => prev.map(blog => blog._id === updatedBlog._id ? updatedBlog : blog));
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this blog?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`${apiUrl}/api/blogs/${id}`, {
        method: 'DELETE'
      });

      if (response.ok) {
        setBlogs(prev => prev.filter(blog => blog._id !== id));
      } else {
        console.error('Failed to delete blog');
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading blogs...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Blog Management</h1>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2"
          >
            <Plus size={20} />
            Add Blog
          </button>
        </div>

        {blogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No blogs found. Add your first blog!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div key={blog._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                
                {/* Blog Image + Delete Icon */}
                <div className="relative h-48 bg-gray-200">
                  {blog.mainImage ? (
                    <img
                      src={blog.mainImage}
                      alt={blog.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      No Image
                    </div>
                  )}
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="absolute -bottom-8 right-4  text-red-500 p-1 rounded-full hover:text-white hover:bg-red-600"
                    title="Delete Blog"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>

                {/* Blog Content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    Created: {formatDate(blog.createdAt)}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    {blog.content?.length || 0} sections
                  </p>

                  
                  
                  <button
                    onClick={() => setEditingBlog(blog)}
                    className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 flex items-center justify-center gap-2"
                  >
                    <Edit size={16} />
                    Edit Blog
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {showAddForm && (
          <AddForm
            onClose={() => setShowAddForm(false)}
            onBlogAdded={handleBlogAdded}
          />
        )}

        {editingBlog && (
          <EditForm
            blog={editingBlog}
            onClose={() => setEditingBlog(null)}
            onBlogUpdated={handleBlogUpdated}
          />
        )}
      </div>
    </div>
  );
};

export default BlogManagement;
