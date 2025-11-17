import { useState } from 'react';
import { Eye, EyeOff, User, Mail, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AdminAuth() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  // Form states
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });

  const [signupForm, setSignupForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  // Removed the useEffect that checked for stored token

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      ...loginForm,
      [name]: value
    });
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupForm({
      ...signupForm,
      [name]: value
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://iaimers-1.onrender.com/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginForm),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Instead of storing in localStorage, we'll use sessionStorage
      // which gets cleared when the browser is closed
      sessionStorage.setItem('adminToken', data.token);
      
      // Set authenticated state to true
      setIsAuthenticated(true);
      
      // Redirect to dashboard
      navigate('/dashboard');
    } catch (err) {
      setError(err.message || 'An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('https://iaimers-1.onrender.com/api/admin/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupForm),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Signup failed');
      }

      // Switch to login form after successful signup
      setIsLogin(true);
      setLoginForm({ 
        email: signupForm.email, 
        password: '' 
      });
      alert('Account created successfully! Please login.');
    } catch (err) {
      setError(err.message || 'An error occurred during signup');
    } finally {
      setLoading(false);
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  // If authenticated, show a message (in a real app, this would be a redirect)
  if (isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900">Authentication Successful</h2>
            <p className="mt-2 text-gray-600">You are now being redirected to the dashboard...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isLogin ? 'Admin Login' : 'Admin Signup'}
          </h2>
          {isLogin && (
            <p className="mt-2 text-center text-sm text-gray-600">
              You must log in each time you visit this application.
            </p>
          )}
        </div>
        
        {error && (
          <div className="bg-red-50 p-4 rounded-md">
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        {isLogin ? (
          <div className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm space-y-4">
              <div className="relative">
                <label htmlFor="login-email" className="sr-only">Email address</label>
                <Mail className="absolute top-3 left-3 text-gray-400" size={20} />
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none relative block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10"
                  placeholder="Email address"
                  value={loginForm.email}
                  onChange={handleLoginChange}
                />
              </div>
              
              <div className="relative">
                <label htmlFor="login-password" className="sr-only">Password</label>
                <Lock className="absolute top-3 left-3 text-gray-400" size={20} />
                <input
                  id="login-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  className="appearance-none relative block w-full pl-10 pr-10 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10"
                  placeholder="Password"
                  value={loginForm.password}
                  onChange={handleLoginChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <button
                onClick={handleLoginSubmit}
                disabled={loading}
                className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Logging in...' : 'Sign in'}
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm space-y-4">
              <div className="relative">
                <label htmlFor="signup-name" className="sr-only">Full name</label>
                <User className="absolute top-3 left-3 text-gray-400" size={20} />
                <input
                  id="signup-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none relative block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10"
                  placeholder="Full name"
                  value={signupForm.name}
                  onChange={handleSignupChange}
                />
              </div>
              
              <div className="relative">
                <label htmlFor="signup-email" className="sr-only">Email address</label>
                <Mail className="absolute top-3 left-3 text-gray-400" size={20} />
                <input
                  id="signup-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none relative block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10"
                  placeholder="Email address"
                  value={signupForm.email}
                  onChange={handleSignupChange}
                />
              </div>
              
              <div className="relative">
                <label htmlFor="signup-password" className="sr-only">Password</label>
                <Lock className="absolute top-3 left-3 text-gray-400" size={20} />
                <input
                  id="signup-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  required
                  className="appearance-none relative block w-full pl-10 pr-10 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10"
                  placeholder="Password"
                  value={signupForm.password}
                  onChange={handleSignupChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <button
                onClick={handleSignupSubmit}
                disabled={loading}
                className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {loading ? 'Creating account...' : 'Create account'}
              </button>
            </div>
          </div>
        )}

        <div className="text-center mt-4">
          <button
            type="button"
            onClick={toggleForm}
            className="text-sm text-blue-600 hover:text-blue-800"
          >
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
}