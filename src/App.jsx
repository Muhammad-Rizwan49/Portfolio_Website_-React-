import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import AdminLogin from "./components/Admin/AdminLogin/AdminLogin";
import AdminDashboard from "./components/Admin/AdminDashboard/AdminDashboard";
import AdminSkills from "./components/Admin/AdminSkills/AdminSkills";
import AdminProjects from "./components/Admin/AdminProjects/AdminProjects";
import AdminAbout from "./components/Admin/AdminAbout/AdminAbout";
import AdminMessages from "./components/Admin/AdminMessages/AdminMessages";
import AdminProfile from "./components/Admin/AdminProfile/AdminProfile";

import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import ProtectedRoute from "./components/Admin/ProtectedRoute/ProtectedRoute";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        {/* Protected Admin Routes */}
        <Route
          path="/admin-dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-skills"
          element={
            <ProtectedRoute>
              <AdminSkills />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-projects"
          element={
            <ProtectedRoute>
              <AdminProjects />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-about"
          element={
            <ProtectedRoute>
              <AdminAbout />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-messages"
          element={
            <ProtectedRoute>
              <AdminMessages />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin-profile"
          element={
            <ProtectedRoute>
              <AdminProfile />
            </ProtectedRoute>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;