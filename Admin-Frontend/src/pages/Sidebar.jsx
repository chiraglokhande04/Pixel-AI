import { useState } from "react";
import { BookOpen, Users, Calendar, Settings as SettingsIcon, Home , HandCoins,NotebookPen, MonitorCog } from "lucide-react";

import Dashboard from '../components/AdminPanel/Dashboard';
import CoursesPage from '../components/AdminPanel//Courses/CoursesPage'
import InstructorManagement from '../components/AdminPanel/Instructors/InstructorManagement';
import JobManagement from '../components/AdminPanel/Jobs/JobManagement.jsx';
import BlogManagement from "../components/AdminPanel/Blogs/BlogManagement.jsx";
import ServiceManagement from "../components/AdminPanel/Services/ServiceManagement.jsx";

// Sidebar with navigation
export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("dashboard");
  
  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "courses", label: "Courses", icon: BookOpen },
    { id: "instructors", label: "Instructors", icon: Users },
    { id: "jobOpenings", label: "Job Openings", icon: HandCoins },
    { id: "blogs", label: "Blogs", icon: NotebookPen },
    { id: "services", label: "Services", icon: MonitorCog },
  ];
  
  // Map active tab to component
  const getActiveComponent = () => {
    switch (activeTab) {
      case "dashboard": return <Dashboard />;
      case "courses": return <CoursesPage />;
      case "instructors": return <InstructorManagement />;
      case "jobOpenings": return <JobManagement />;
      case "blogs": return <BlogManagement/>;
      case "services": return <ServiceManagement/>;
      default: return <Dashboard />;
    }
  };
  
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4 border-b">
          <h1 className="text-xl font-bold text-blue-600">Learning Portal</h1>
        </div>
        
        <div className="py-4">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                className={`flex items-center w-full px-4 py-3 text-left ${
                  isActive 
                    ? "bg-blue-50 border-r-4 border-blue-500 text-blue-700" 
                    : "text-gray-600 hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={20} className={isActive ? "text-blue-700" : "text-gray-500"} />
                <span className="ml-3 font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Main content area */}
      <div className="flex-1 overflow-auto">
        {getActiveComponent()}
      </div>
    </div>
  );
}