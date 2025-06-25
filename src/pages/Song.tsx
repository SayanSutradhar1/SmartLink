import { PlatformLink } from "@/components/Shared/PlatformLink";
import { Button } from "@/components/ui/button";
// import { song as demoSong } from "@/utils/songs";
import axios from "axios";
import { Headphones, Music, Share2 } from "lucide-react";
import { useEffect, useState } from "react";
import { FaMusic, FaSpotify, FaYoutube } from "react-icons/fa";
import { useParams } from "react-router-dom";

import musicCover from "@/assets/images/bg9.jpg"

interface TrackFetchData {
  songName: string;
  category: string;
  audioFile: string;
  singers: [
    {
      artistName: string;
    }
  ];
  albumId: string;
  albumTitle: string;
  albumThumbnail: string;
  albumLanguage: string;
  albumGenre: string;
  platformLinks: {
    appleMusic: string;
    spotify: string;
    youtubeMusic: string;
  };
  description? : string
}
const Song = () => {
  const { trackName } = useParams<{ trackName: string }>();

  const [trackDetails, setTrackDetails] = useState<
    TrackFetchData | undefined
  >();

  const fetchTrack = async () => {
    try {
      const apiResponse = await axios.get(
        `http://localhost:3000/api/smartlink/getTrack?trackName=${trackName}`
      );

      const res = apiResponse.data as {
        success: boolean;
        status: number;
        message: string;
        data: TrackFetchData;
      };

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
    navigator.share({
      title: 'Check this out!',
      text: 'SwaLay SmartLink',
      url: window.location.href,
    }).then(() => {
      console.log('Shared successfully');
    }).catch((error) => {
      console.error('Error sharing:', error);
    });
  } else {
    alert('Web Share API is not supported in your browser.');
  }
};


  return (
    <div className="min-h-screen relative bg-gradient-to-b from-blue-950 via-purple-900/40 to-blue-900 text-white pb-4">
      <div className="absolute inset-0 overflow-hidden bottom-0 h-full">
        {/* Animated circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* Animated wave effect */}
        <div className="absolute inset-0 opacity-10">
          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 1440 320"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              className="animate-[wave_15s_ease-in-out_infinite]"
            ></path>
          </svg>
        </div>

        {/* Floating music notes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute h-8 w-8 text-white opacity-10 animate-float1">
            ♪
          </div>
          <div
            className="absolute h-8 w-8 text-white opacity-10 animate-float2"
            style={{ left: "25%", top: "15%" }}
          >
            ♫
          </div>
          <div
            className="absolute h-8 w-8 text-white opacity-10 animate-float3"
            style={{ left: "70%", top: "35%" }}
          >
            ♪
          </div>
          <div
            className="absolute h-8 w-8 text-white opacity-10 animate-float4"
            style={{ left: "85%", top: "20%" }}
          >
            ♫
          </div>
        </div>
      </div>
      {/* Cover Photo Section */}
      <div className="relative w-full h-64 md:h-80 lg:h-96">
        <img
          src={musicCover}
          alt="Song Cover"
          className="object-cover w-full h-full brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-70 shadow-2xl"></div>
      </div>

      {/* Song Info Section */}
      <div className="container max-w-5xl mx-auto px-4 -mt-20 md:-mt-24 relative z-10">
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-end">
          {/* Song Profile Picture */}
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-lg overflow-hidden shadow-xl border-4 border-gray-800 bg-gray-800">
            <img
              src={`https://swalay-music-files.s3.ap-south-1.amazonaws.com/albums/07c1a${trackDetails?.albumId}ba3/cover/${trackDetails?.albumThumbnail}`}
              alt="Song Profile"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Song Details */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {trackDetails?.songName}
            </h1>
            {trackDetails?.singers.map((s, i) => (
              <h2 className="text-xl md:text-2xl text-gray-300 mb-4" key={i}>
                <span>{s.artistName}</span>
              </h2>
            ))}

            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-4">
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                {trackDetails?.albumGenre}
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                {trackDetails?.albumLanguage}
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm">
                {trackDetails?.category}
              </span>
            </div>

            <div className="flex gap-3 justify-center md:justify-start">
              <Button
                size="icon"
                variant="outline"
                className="rounded-full h-10 w-10 bg-gray-800 border-gray-700 hover:bg-gray-700"
                onClick={handleNativeShare}
              >
                <Share2 size={18} />
              </Button>
            </div>
          </div>
        </div>

        {/* Platform Links */}
        <div className="mt-12 bg-gray-800/10 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl text-gray-300 font-semibold mb-6 flex items-center">
            <Headphones className="mr-2" /> Listen On
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <PlatformLink
              name="Spotify"
              icon={<FaSpotify className="text-green-500" />}
              url={trackDetails?.platformLinks.spotify!}
              color="bg-green-600 hover:bg-green-700"
            />
            <PlatformLink
              name="Apple Music"
              icon={<FaMusic className="text-red-400" />}
              url={trackDetails?.platformLinks.appleMusic!}
              color="bg-pink-600 hover:bg-pink-700"
            />
            <PlatformLink
              name="YouTube Music"
              icon={<FaYoutube className="text-red-700" />}
              url={trackDetails?.platformLinks.youtubeMusic!}
              color="bg-red-600 hover:bg-red-700"
            />
          </div>
        </div>

        {/* Song Description */}
        <div className="mt-8 bg-gray-800/80 rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Music className="mr-2" /> About This Song
          </h3>
          <p className="text-gray-300 leading-relaxed">
            {
              trackDetails?.description ?? "No description. Will be added later on"
            }
          </p>
          {/* <div className="mt-6 flex flex-col sm:flex-row gap-4 text-sm text-gray-400">
            <div>
              <p>
                <span className="font-semibold">Released:</span> June 15, 2023
              </p>
              <p>
                <span className="font-semibold">Duration:</span> 3:42
              </p>
            </div>
            <div>
              <p>
                <span className="font-semibold">Producer:</span> Alex Martinez
              </p>
              <p>
                <span className="font-semibold">Label:</span> Harmony Records
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Song;
