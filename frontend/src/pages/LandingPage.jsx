import { useNavigate } from "react-router-dom";
import {
  ShieldCheck,
  Users,
  Stethoscope,
  ArrowRight,
  LayoutDashboard,
} from "lucide-react";
import Logo from "../components/Logo"; // <--- Import Logo

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <LayoutDashboard className="w-8 h-8 text-blue-500" />,
      title: "Multi-Tenant SaaS",
      desc: "Isolated workspaces for every hospital.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-500" />,
      title: "Role-Based Access",
      desc: "Secure permissions for Admins & Doctors.",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Patient Management",
      desc: "Streamlined OPD & IPD patient flows.",
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-blue-500" />,
      title: "Doctor Portal",
      desc: "Dedicated interface for consultations.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navbar */}
      <nav className="fixed w-full z-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* USE LOGO COMPONENT HERE */}
            <Logo />

            <div className="flex space-x-4">
              <button
                onClick={() => navigate("/login")}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 font-medium transition"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-medium transition shadow-lg shadow-blue-500/30"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 text-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-6">
          eHMS: Healthcare,{" "}
          <span className="text-blue-600 dark:text-blue-400">Simplified.</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
          The ultimate cloud-native Hospital Management System. Onboard your
          hospital in minutes and manage patients, staff, and operations
          effortlessly.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => navigate("/signup")}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 rounded-xl font-semibold transition shadow-xl"
          >
            Register Hospital <ArrowRight size={20} />
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-lg px-8 py-4 rounded-xl font-semibold transition"
          >
            Staff Login
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Everything you need
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div
                key={i}
                className="p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:-translate-y-2 transition duration-300 border border-transparent hover:border-blue-500/30"
              >
                <div className="mb-4 bg-blue-100 dark:bg-blue-900/30 w-14 h-14 rounded-lg flex items-center justify-center">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto py-8 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} eHMS Inc. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
