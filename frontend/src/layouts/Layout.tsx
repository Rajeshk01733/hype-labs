import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from '../components/CustomCursor';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-lato selection:bg-white selection:text-black">
      <CustomCursor />
      <Navbar />
      <main>
        <Outlet /> {/* page-specific content will render here */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
