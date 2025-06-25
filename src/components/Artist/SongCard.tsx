import { Play } from "lucide-react";
import { Link } from "react-router-dom";

export default function SongCard({
  title,
  image,
  genre,
}: {
  title: string;
  image: string;
  genre: string;
}) {
  return (
    <Link to={`/songs/${title}`} className="group w-72">
      <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all group-hover:shadow-lg group-hover:shadow-purple-500/20">
        <div className="relative aspect-square">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <div className="p-3 rounded-full bg-white/20 backdrop-blur-sm">
              <Play size={24} />
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg mb-1">{title}</h3>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300">{genre}</span>
            {/* <span className="text-sm text-gray-300">{year}</span> */}
          </div>
        </div>
      </div>
    </Link>
  );
}
