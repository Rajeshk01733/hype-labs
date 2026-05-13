import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";

import Home from "./pages/Home";
import About from "./pages/About";

import PortfolioFilter from "./pages/PortfolioFilter";

import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";

import Insights from "./pages/Insights";

import Careers from "./pages/Careers";
import CareerDetails from "./pages/CareerDetails";

import Design from "./pages/Design";
import DesignPage from "./pages/DesignPage";

import Development from "./pages/Development";
import DevelopmentPage from "./pages/DevelopmentPage";

import Marketing from "./pages/Marketing";
import MarketingPage from "./pages/MarketingPage";

import Infrastructure from "./pages/Infrastructure";
import InfrastructurePage from "./pages/InfrastructurePage";

import CaseStudyDetails from "./pages/CaseStudyDetails";

import { designData } from "./data/design";
import { developmentData } from "./data/development";
import { marketingData } from "./data/marketing";
import { infrastructureData } from "./data/infrastructure";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* HOME */}
          <Route index element={<Home />} />

          {/* ABOUT */}
          <Route path="about" element={<About />} />

          {/* DESIGN */}
          <Route path="design" element={<Design />} />

          {designData.map((design) => (
            <Route
              key={design.id}
              path={`design/${design.id}`}
              element={<DesignPage data={design} />}
            />
          ))}

          {/* DEVELOPMENT */}
          <Route path="development" element={<Development />} />

          {developmentData.map((development) => (
            <Route
              key={development.id}
              path={`development/${development.id}`}
              element={<DevelopmentPage data={development} />}
            />
          ))}

          {/* MARKETING */}
          <Route path="marketing" element={<Marketing />} />

          {marketingData.map((marketing) => (
            <Route
              key={marketing.id}
              path={`marketing/${marketing.id}`}
              element={<MarketingPage data={marketing} />}
            />
          ))}

          {/* INFRASTRUCTURE */}
          <Route path="infrastructure" element={<Infrastructure />} />

          {infrastructureData.map((infrastructure) => (
            <Route
              key={infrastructure.id}
              path={`infrastructure/${infrastructure.id}`}
              element={<InfrastructurePage data={infrastructure} />}
            />
          ))}

          {/* PORTFOLIO */}
          <Route path="portfolio" element={<PortfolioFilter />} />

          {/* BLOG */}
          <Route path="blog" element={<Blog />} />

          <Route path="blog/:slug" element={<BlogDetails />} />

          {/* INSIGHTS */}
          <Route path="insights" element={<Insights />} />

          {/* CASE STUDY */}
          <Route path="case-study/:slug" element={<CaseStudyDetails />} />

          {/* CAREERS */}
          <Route path="careers" element={<Careers />} />

          {/* IMPORTANT FIX */}
          <Route path="careers/:slug" element={<CareerDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
