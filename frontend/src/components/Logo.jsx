import { Activity } from "lucide-react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2 select-none">
      {/* The Activity Icon from Lucide (Same as Landing Page) */}
      <Activity className="h-8 w-8 text-blue-600 dark:text-blue-400" />

      {/* The Brand Name */}
      <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
        eHMS
      </span>
    </div>
  );
};

export default Logo;
