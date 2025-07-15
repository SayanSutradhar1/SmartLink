import { Share2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StreamingPlatformLink } from "../components/Song/PlatformLinks";
import { icons } from "@/utils/icons";
import { apiGet } from "@/lib/apiFetch";
import { SWALAY_MAIN } from "@/utils/constants";
import type { ApiResponse } from "@/interfaces/api.interface";

interface TrackFetchData {
  profilePicture? : string
  songName: string;
  category: string;
  audioFile: string;
  singers: [
    {
      artistName: string;
    }
  ];
  albumId : string
  albumTitle: string;
  albumThumbnail: string;
  albumLanguage: string;
  albumGenre: string;
  platformLinks: {
    [key: string]: string;
  };
  description? : string
}


export default function Song() {
  const { trackName } = useParams<{ trackName: string }>();

  const [trackDetails, setTrackDetails] = useState<
    TrackFetchData | undefined
  >();

  const fetchTrack = async () => {
    try {
      const res = await apiGet(`/api/smartlink/getTrack?trackName=${trackName}`) as ApiResponse<TrackFetchData>

      if(!res.data){
        window.location.href = SWALAY_MAIN
      }

      if (res.success) {
        setTrackDetails(res.data);
      }

      console.log(res.message);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTrack();
  }, []);

  const handleNativeShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Check this out!",
          text: "SwaLay SmartLink",
          url: window.location.href,
        })
        .then(() => {
          console.log("Shared successfully");
        })
        .catch((error) => {
          console.error("Error sharing:", error);
        });
    } else {
      alert("Web Share API is not supported in your browser.");
    }
  };

  return (
    <div className="min-h-screen">
      {/* Main Content */}
      <div className="flex items-center justify-between min-h-screen py-8 px-2">
        <div className="flex flex-col max-w-xl w-full m-auto">
          {/* Hero Section */}
          <div className="relative flex flex-1 flex-col px-2 pb-8">
            {/* Hero Card */}
            <div className="relative">
              <img src={`${
                    import.meta.env.VITE_PUBLIC_AWS_S3_FOLDER_PATH
                  }/albums/07c1a${trackDetails?.albumId}ba3/cover/${
                    trackDetails?.albumThumbnail
                  }`} className="rounded-t-2xl " />
              {/* Profile Image */}
              <div className="absolute -bottom-8 left-3 md:left-5">
                <img
                  src={`${import.meta.env.VITE_PUBLIC_AWS_S3_FOLDER_PATH}/user/${trackDetails?.profilePicture}`}
                  className="w-28 h-28 lg:w-40 lg:h-40 bg-gray-800 rounded-2xl border-4 border-black animate-in zoom-in-50 fade-in duration-500 delay-300"
                />
              </div>
              <div
                className="absolute right-0 -bottom-12 cursor-pointer"
                onClick={handleNativeShare}
              >
                <Share2 color="white" />
              </div>
            </div>

            {/* Artist Info */}
            <div className="mt-12 animate-in slide-in-from-bottom-4 fade-in duration-500 delay-400">
              <h1 className="text-white text-2xl lg:text-3xl font-bold mb-2">
                {trackDetails?.songName}
              </h1>
              <div className="flex gap-2 flex-wrap">
                {trackDetails?.singers.map((s, i) => (
                  <span key={i} className="text-gray-300">
                    {s.artistName}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 text-sm lg:text-base leading-relaxed mt-2">
                {trackDetails?.description}
              </p>
            </div>
          </div>

          {/* Streaming Platforms */}
          <div className="px-2 space-y-3 pb-8 overflow-y-auto">
            {(
              Object.keys(trackDetails?.platformLinks ?? {}) as Array<
                keyof NonNullable<TrackFetchData["platformLinks"]>
              >
            ).map((k, i) => {
              if (
                !trackDetails?.platformLinks &&
                !trackDetails?.platformLinks[k]
              ) {
                return null;
              }

              const platform = icons.find(icon=>icon.name===k)

              let icon = platform?.icon;
              let name = platform?.title;

              return (
                <StreamingPlatformLink
                  key={i}
                  name={name as string}
                  icon={icon}
                  url={trackDetails?.platformLinks[k]}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
