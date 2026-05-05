import React from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import PortfolioFilter from './pages/PortfolioFilter';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import CareerDetails from './pages/CareerDetails';
import DesignPage from './pages/DesignPage';
import { designData } from './data/design';
import { developmentData } from './data/development';
import DevelopmentPage from './pages/DevelopmentPage';
import { marketingData } from './data/marketing';
import MarketingPage from './pages/MarketingPage';
import { infrastructureData } from './data/infrastructure';
import InfrastructurePage from './pages/InfrastructurePage';
import Development from './pages/Development';
import Design from './pages/Design';
import Marketing from './pages/Marketing';
import Infrastructure from './pages/Infrastructure';
import BlogDetails from './pages/BlogDetails';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* <Suspense fallback={<div className="p-8 text-center">Loading...</div>}> */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path='design' element={<Design/>}/>
            {designData.map((design) => (
              <Route 
                key={design.id} 
                path={`design/${design.id}`} 
                element={<DesignPage data={design} />} 
              />
            ))}
            <Route path='development' element={<Development/>}/>
            {developmentData.map((development) => (
              <Route 
                key={development.id} 
                path={`/development/${development.id}`} 
                element={<DevelopmentPage data={development} />} 
              />
            ))}
            <Route path='marketing' element={<Marketing/>}/>
            {marketingData.map((marketing) => (
              <Route 
                key={marketing.id} 
                path={`/marketing/${marketing.id}`} 
                element={<MarketingPage data={marketing} />} 
              />
            ))}
            <Route path='infrastructure' element={<Infrastructure/>}/>
            {infrastructureData.map((infrastructure) => (
              <Route 
                key={infrastructure.id} 
                path={`/infrastructure/${infrastructure.id}`} 
                element={<InfrastructurePage data={infrastructure} />} 
              />
            ))}
            <Route path="portfolio" element={<PortfolioFilter/>}/>
            <Route path="blog" element={<Blog/>}/>
            <Route path="blog/:id" element={<BlogDetails/>}/>
            <Route path="careers" element={<Careers/>}/>
            <Route path="careers/:id" element={<CareerDetails/>}/>
          </Route>
        </Routes>
      {/* </Suspense> */}
    </BrowserRouter>
  );
};

export default App;