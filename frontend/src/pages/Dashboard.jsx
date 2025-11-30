import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { logout } from "../redux/authSlice";
import {
  LogOut,
  LayoutDashboard,
  Users,
  FileText,
  Settings,
  Activity,
} from "lucide-react";
import Logo from "../components/Logo"; // <--- Import Logo

const Dashboard = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/dashboard");
        setStats(res.data.stats);
        setMenu(res.data.menu);
      } catch (err) {
        if (err.response?.status === 401) {
          dispatch(logout());
          navigate("/login");
        }
      }
    };
    fetchData();
  }, [dispatch, navigate]);

  const getIcon = (iconName) => {
    const icons = {
      home: <LayoutDashboard />,
      users: <Users />,
      "file-text": <FileText />,
      settings: <Settings />,
      activity: <Activity />,
    };
    return icons[iconName] || <LayoutDashboard />;
  };

  return (
    <div className="min-h-screen flex bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col fixed h-full z-20">
        {/* LOGO PLACED HERE IN SIDEBAR HEADER */}
        <div className="h-20 flex items-center justify-center border-b border-gray-200 dark:border-gray-700">
          <Logo />
        </div>

        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menu.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-lg cursor-pointer transition"
            >
              {getIcon(item.icon)}
              <span className="font-medium">{item.title}</span>
            </div>
          ))}
        </nav>
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => {
              dispatch(logout());
              navigate("/login");
            }}
            className="flex items-center gap-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Dashboard Overview
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Welcome back, {user?.name}
            </p>
          </div>
          <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-1 rounded-full text-sm font-semibold">
            {user?.role.replace("_", " ")}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats &&
            Object.entries(stats).map(([key, value]) => (
              <div
                key={key}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition"
              >
                <h3 className="text-gray-500 dark:text-gray-400 text-sm font-medium uppercase tracking-wider mb-2">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </h3>
                <p className="text-4xl font-bold text-gray-900 dark:text-white">
                  {typeof value === "object" ? value.length : value}
                </p>
              </div>
            ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
