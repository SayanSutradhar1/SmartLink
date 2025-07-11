import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface StreamingPlatformLinkProps {
  icon: any;
  name: string;
  url?: string;
  delay?: number;
}

export function StreamingPlatformLink({
  icon,
  name,
  url,
  delay = 0,
}: StreamingPlatformLinkProps) {
  return (
    <Link
      to={url ?? ""}
      className="group flex items-center justify-between bg-gray-800/80 backdrop-blur-sm rounded-2xl p-4 cursor-pointer transition-all duration-300 hover:bg-gray-700/80 hover:scale-[1.02] active:scale-[0.98] animate-in slide-in-from-bottom-4 fade-in"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
          <img src={icon} alt="" />
        </div>
        <span className="text-gray-300 font-medium text-lg group-hover:text-white transition-colors duration-200">
          {name}
        </span>
      </div>
      <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-gray-300 group-hover:translate-x-1 transition-all duration-200" />
    </Link>
  );
}
