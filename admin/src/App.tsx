import { Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import Layout from "./layout/Layout";
import RedirectIfAuthenticated from "./layout/RedirectIfAuthenticated";
import ProtectedRoute from "./layout/ProtectedRoute";

const Login = lazy(() => import("./pages/auth/Login"));
const ForgotPassword = lazy(() => import("./pages/auth/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/auth/ResetPassword"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Profile = lazy(() => import("./pages/Profile"));

const ContactForm = lazy(() => import("./pages/ContactFormSubmission"));
const NewsletterSub = lazy(() => import("./pages/NewsletterSub"));
const SuperAdmin = lazy(() => import("./pages/SuperAdmin"));

const CaseStudy = lazy(() => import("./pages/case-study/CaseStudy"));
const CaseStudyDownloads = lazy(
  () => import("./pages/case-study/CaseStudyDownloads"),
);

const Insights = lazy(() => import("./pages/insight/Insights"));
const InsightDownloads = lazy(() => import("./pages/insight/InsightDownloads"));

const CareersOpening = lazy(() => import("./pages/careers/CareersOpening"));
const CareersSubmission = lazy(
  () => import("./pages/careers/CareersSubmission"),
);

export default function App() {
  return (
    <>
      <Suspense fallback={<div className="min-h-screen" />}>
        <Routes>
          <Route element={<RedirectIfAuthenticated />}>
            <Route path="/" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Route>

          <Route element={<ProtectedRoute />}>
            <Route element={<Layout />}>
              <Route path="/*" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/profile" element={<Profile />} />

              <Route path="/dashboard/contact-form" element={<ContactForm />} />
              <Route
                path="/dashboard/newsletter-subscribers"
                element={<NewsletterSub />}
              />

              <Route
                path="/dashboard/careers/careers-opening"
                element={<CareersOpening />}
              />
              <Route
                path="/dashboard/careers/careers-submission"
                element={<CareersSubmission />}
              />

              <Route path="/dashboard/insights" element={<Insights />} />
              <Route
                path="/dashboard/insights/downloads"
                element={<InsightDownloads />}
              />

              <Route path="/dashboard/case-study" element={<CaseStudy />} />
              <Route
                path="/dashboard/case-study/downloads"
                element={<CaseStudyDownloads />}
              />
              <Route path="/dashboard/super-admin" element={<SuperAdmin />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
