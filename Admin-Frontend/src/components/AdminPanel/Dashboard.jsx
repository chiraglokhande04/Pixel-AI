import React, { useState, useEffect } from 'react';
import { BookOpen, Users, Activity, HandCoins,NotebookPen, MonitorCog } from 'lucide-react';
const apiUrl = import.meta.env.VITE_API_URL;

const Dashboard = () => {
  const [stats, setStats] = useState({
    blogs: 0,
    responses: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Individual API calls - fetch all data and count locally

  const fetchBlogs = async () => {
    const response = await fetch(`${apiUrl}/api/blogs`);
    if (!response.ok) throw new Error('Failed to fetch blogs');
    const data = await response.json();
    return Array.isArray(data) ? data.length : (data.data ? data.data.length : 0);
  };

  const fetchResponses = async () => {
    const response = await fetch(`${apiUrl}/api/callbacks`);
    if (!response.ok) throw new Error('Failed to fetch responses');
    const data = await response.json();
    return Array.isArray(data) ? data.length : (data.data ? data.data.length : 0);
  };

  // Main fetch function - calls all APIs in parallel and counts results
  const fetchStats = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Fetch all data in parallel and count the results
      const [blogs, responses] = await Promise.all([
        fetchBlogs(),
        fetchResponses()
      ]);

      setStats({
        blogs,
        responses
      });

    } catch (err) {
      console.error('API Error:', err);
      setError(err.message || 'Failed to fetch dashboard data');
      
      // Set zero counts on error
      setStats({
        blogs: 0,
        responses: 0

      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const statsConfig = [
    {
      title: 'Blog Posts',
      value: stats.blogs,
      icon: NotebookPen,
      color: 'bg-gradient-to-r from-orange-500 to-orange-600',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-600',
      change: '+18%'
    },
    {
      title: 'Responses',
      value: stats.responses,
      icon: MonitorCog,
      color: 'bg-gradient-to-r from-indigo-500 to-indigo-600',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-600',
      change: '+5%'
    }
  ];

  const StatCard = ({ title, value, icon: Icon, color, iconBg, iconColor, change }) => (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
      <div className={`${color} h-2`}></div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className={`${iconBg} p-3 rounded-full`}>
            <Icon className={`w-6 h-6 ${iconColor}`} />
          </div>

        </div>
        
        <div className="space-y-2">
          <h3 className="text-gray-600 text-sm font-medium uppercase tracking-wide">{title}</h3>
          {loading ? (
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-20"></div>
            </div>
          ) : (
            <p className="text-3xl font-bold text-gray-900">{value.toLocaleString()}</p>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's what's happening with your platform.</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={fetchStats}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
            >
              <Activity className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              <span>{loading ? 'Refreshing...' : 'Refresh'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Error State */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <div className="bg-red-100 rounded-full p-2 mr-3">
              <Activity className="w-5 h-5 text-red-600" />
            </div>
            <div>
              <h3 className="text-red-800 font-medium">Error</h3>
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4 md:gap-6 mb-8">
        {statsConfig.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>


      
    </div>
  );
};

export default Dashboard;