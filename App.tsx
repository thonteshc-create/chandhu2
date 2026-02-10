
import React, { useState } from 'react';
import { SiteProvider } from './store/siteContext';
import { PageType } from './types';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Fleet from './pages/Destinations'; // Reusing Destinations page for Fleet
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import AdminDashboard from './admin/AdminDashboard';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState('');

  const handleAdminLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = formData.get('username');
    const pass = formData.get('password');

    if (user === 'admin' && pass === 'password') {
      setIsAdminLoggedIn(true);
      setLoginError('');
    } else {
      setLoginError('Invalid credentials. Use admin/password');
    }
  };

  const renderPage = () => {
    if (currentPage === 'admin') {
      if (isAdminLoggedIn) {
        return <AdminDashboard onLogout={() => setIsAdminLoggedIn(false)} />;
      }
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
          <div className="max-w-md w-full bg-white rounded-[40px] shadow-2xl p-12 space-y-8 border border-slate-100">
            <div className="text-center space-y-2">
                <div className="w-16 h-16 bg-sky-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">C</div>
                <h2 className="text-3xl font-bold text-slate-900">Admin Login</h2>
                <p className="text-slate-500 text-sm">Secure access to Chandu CMS</p>
            </div>
            <form className="space-y-6" onSubmit={handleAdminLogin}>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Username</label>
                <input name="username" type="text" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-sky-600/20" placeholder="admin" required />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Password</label>
                <input name="password" type="password" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-sky-600/20" placeholder="••••••••" required />
              </div>
              {loginError && <p className="text-red-500 text-xs text-center font-bold">{loginError}</p>}
              <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/20">
                Sign In
              </button>
            </form>
            <button onClick={() => setCurrentPage('home')} className="w-full text-slate-400 text-sm font-semibold hover:text-slate-600">
                Back to Website
            </button>
          </div>
        </div>
      );
    }

    return (
      <Layout currentPage={currentPage} setPage={setCurrentPage}>
        {currentPage === 'home' && <Home setPage={setCurrentPage} />}
        {currentPage === 'about' && <About />}
        {currentPage === 'fleet' && <Fleet />}
        {currentPage === 'services' && <Services />}
        {currentPage === 'blog' && <Blog />}
        {currentPage === 'contact' && <Contact />}
      </Layout>
    );
  };

  return (
    <SiteProvider>
      {renderPage()}
    </SiteProvider>
  );
};

export default App;
