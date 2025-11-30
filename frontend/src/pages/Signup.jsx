import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";
import Input from "../components/Input";
import { ArrowLeft } from "lucide-react";
import Logo from "../components/Logo"; // <--- Imported Logo

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    domain: "",
    licenseNumber: "",
    address: "",
    contactPhone: "",
    adminEmail: "",
    adminPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      await api.post("/tenants/onboard", formData);
      setSuccess("Hospital registered successfully! Redirecting...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 relative">
      {/* --- BACK BUTTON --- */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
      >
        <ArrowLeft size={20} />
        Back to Home
      </button>

      <div className="max-w-2xl w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
        <div className="text-center">
          {/* --- LOGO SECTION --- */}
          <div className="flex justify-center mb-6">
            <Logo />
          </div>

          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Register your Hospital
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Create a secure workspace for your organization
          </p>
        </div>

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
            {success}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSignup}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Hospital Details */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">
                Hospital Details
              </h3>
            </div>

            <Input
              label="Hospital Name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. City General"
            />
            <Input
              label="Domain (Unique ID)"
              name="domain"
              required
              value={formData.domain}
              onChange={handleChange}
              placeholder="e.g. citygeneral"
            />
            <Input
              label="License Number"
              name="licenseNumber"
              required
              value={formData.licenseNumber}
              onChange={handleChange}
              placeholder="LIC-123456"
            />
            <Input
              label="Contact Phone"
              name="contactPhone"
              required
              value={formData.contactPhone}
              onChange={handleChange}
              placeholder="+1 555-000-0000"
            />
            <div className="md:col-span-2">
              <Input
                label="Address"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
                placeholder="123 Healthcare Blvd, New York"
              />
            </div>

            {/* Admin Details */}
            <div className="md:col-span-2 mt-4">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">
                Admin Account Setup
              </h3>
            </div>

            <Input
              label="Admin Email"
              name="adminEmail"
              type="email"
              required
              value={formData.adminEmail}
              onChange={handleChange}
              placeholder="admin@citygeneral.com"
            />
            <Input
              label="Admin Password"
              name="adminPassword"
              type="password"
              required
              value={formData.adminPassword}
              onChange={handleChange}
              placeholder="••••••••"
            />
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 shadow-lg transition duration-150 ease-in-out"
            >
              Complete Registration
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Already registered?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
