import SongCard from "@/components/Artist/SongCard";
import {
  ExternalLink,
  Facebook,
  Headphones,
  Instagram,
  Music,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
// import song from "../assets/icons/music.png"; // Example song image, replace with actual image path
import axios from "axios";
import { useEffect, useState } from "react";

interface DataForSmartLink {
  labelName: string;
  facebook?: string;
  appleMusic?: string;
  instagram?: string;
  spotify?: string;
  ytMusic?: string;
  profilePicture?: string;
  albumId?: string;
  albumTitle: string;
  albumThumbnail: string;
  albumLanguage: string;
  albumGenre: string;
  tracks: [
    {
      trackName: string;
      audioFile: string;
      platformLinks: {
        [key: string]: string | null;
      };
      singers: [
        {
          artistName: string;
        }
      ];
    }
  ];
}

const Artist = () => {
  const { uniqueUsername } = useParams<{ uniqueUsername: string }>();

  const [profileData,setProfileData] = useState<DataForSmartLink | undefined>()

  const fetchProfile = async (uniqueUsername: string) => {
    try {
      const apiResponse = await axios.get(
        `${import.meta.env.VITE_SWALAY_CLIENT}/api/smartlink/getProfile?uniqueUsername=${uniqueUsername}`
      );

      const res = apiResponse.data as {
        success: boolean;
        message: string;
        status: number;
        data: DataForSmartLink;
      };
      
      console.log(res);
      

      if (res.success) {
        setProfileData(res.data)
      }
      console.log(profileData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile(uniqueUsername!);
  }, [uniqueUsername]);
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-purple-900/40 to-blue-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
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

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-6xl">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-6">
            {/* Profile Avatar */}
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-purple-500 to-violet-600 flex items-center justify-center text-white text-4xl md:text-5xl font-bold shadow-lg border-4 border-white/20">
                JD
              </div>
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 opacity-30 blur-md -z-10"></div>
            </div>

            {/* Profile Info */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {profileData?.labelName}
              </h1>
              <p className="text-xl text-gray-300 mb-4">@{uniqueUsername}</p>

              <div className="flex items-center justify-center md:justify-start space-x-4">
                {profileData?.instagram && (
                  <Link
                    to={profileData?.instagram}
                    className="group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all">
                      <Instagram size={20} />
                    </div>
                  </Link>
                )}
                {profileData?.facebook && (
                  <Link
                    to={profileData.facebook}
                    className="group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all">
                      <Facebook size={20} />
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Stats Card */}
          {/* <div className="backdrop-blur-md bg-white/5 rounded-xl p-4 border border-white/10 shadow-xl flex gap-6">
            <div className="text-center px-4">
              <p className="text-3xl font-bold">2</p>
              <p className="text-sm text-gray-300">Songs</p>
            </div>
            <div className="text-center px-4 border-l border-white/10">
              <p className="text-3xl font-bold">3</p>
              <p className="text-sm text-gray-300">Platforms</p>
            </div>
            <div className="text-center px-4 border-l border-white/10">
              <p className="text-3xl font-bold">10K</p>
              <p className="text-sm text-gray-300">Listeners</p>
            </div>
          </div> */}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Platform Links */}
          <div className="lg:col-span-1">
            <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10 shadow-xl h-full">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Headphones size={24} className="text-purple-400" />
                Listen On
              </h2>

              <div className="space-y-3">
                {profileData?.instagram && (
                  <PlatformLink
                    icon={<Instagram size={20} />}
                    name="Instagram"
                    href={profileData.instagram}
                    color="from-pink-600 to-purple-600"
                  />
                )}
                {profileData?.spotify && (
                  <PlatformLink
                    icon={
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM16.5 16.5C15.3833 17.2167 14.05 17.6667 12.5833 17.6667C9.8 17.6667 7.38333 16.0333 6.26667 13.6667H8.33333V11.8333H5.68333C5.58333 11.2833 5.5 10.7167 5.5 10.1333C5.5 9.55 5.58333 8.98333 5.68333 8.43333H8.33333V6.6H6.26667C7.38333 4.23333 9.8 2.6 12.5833 2.6C14.05 2.6 15.3833 3.05 16.5 3.76667V6.6H14.6667C13.9333 5.98333 13 5.6 12 5.6C10.1667 5.6 8.58333 6.78333 8.05 8.43333H12V10.1333H7.68333C7.65 10.4667 7.63333 10.8 7.63333 11.1333C7.63333 11.4667 7.65 11.8 7.68333 12.1333H12V13.8333H8.05C8.58333 15.4833 10.1667 16.6667 12 16.6667C13 16.6667 13.9333 16.2833 14.6667 15.6667H16.5V16.5Z" />
                      </svg>
                    }
                    name="Spotify"
                    href={profileData.spotify}
                    color="from-green-500 to-green-700"
                  />
                )}
                {profileData?.ytMusic && (
                  <PlatformLink
                    icon={
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M23.4985 6.29835C23.3813 5.89599 23.1629 5.53359 22.8672 5.24394C22.5715 4.95429 22.2068 4.74601 21.8063 4.64C19.8 4.2 12 4.2 12 4.2C12 4.2 4.2 4.2 2.19375 4.64C1.79325 4.74601 1.42855 4.95429 1.13285 5.24394C0.837144 5.53359 0.618681 5.89599 0.50175 6.29835C0.2 8.31 0.2 12 0.2 12C0.2 12 0.2 15.69 0.50175 17.7016C0.618681 18.104 0.837144 18.4664 1.13285 18.7561C1.42855 19.0457 1.79325 19.254 2.19375 19.36C4.2 19.8 12 19.8 12 19.8C12 19.8 19.8 19.8 21.8063 19.36C22.2068 19.254 22.5715 19.0457 22.8672 18.7561C23.1629 18.4664 23.3813 18.104 23.4985 17.7016C23.8 15.69 23.8 12 23.8 12C23.8 12 23.8 8.31 23.4985 6.29835ZM9.6 15.6V8.4L15.8 12L9.6 15.6Z" />
                      </svg>
                    }
                    name="YouTube Music"
                    href={profileData.ytMusic}
                    color="from-red-600 to-red-700"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Songs Section */}
          <div className="lg:col-span-2">
            <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10 shadow-xl h-full ">
              <h2 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <Music size={24} className="text-purple-400" />
                My Songs
              </h2>
              <p className="text-gray-300 text-sm mb-8">
                Click on a song to view more details
              </p>

              <div className="flex overflow-x-auto">

                {profileData?.tracks?.map((song, index) => (
                  <SongCard
                    key={index}
                    title={song.trackName}
                    image={`${import.meta.env.VITE_PUBLIC_AWS_S3_FOLDER_PATH}albums/07c1a${profileData.albumId}ba3/cover/${profileData.albumThumbnail}`}
                    genre={profileData.albumGenre || "Unknown"}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Featured Section */}
        {/* <div className="mt-12">
          <div className="backdrop-blur-md bg-white/5 rounded-xl p-6 border border-white/10 shadow-xl">
            <h2 className="text-2xl font-bold mb-6">Featured</h2>

            <div className="relative overflow-hidden rounded-lg aspect-video">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-blue-800 flex items-center justify-center">
                <Play size={64} className="text-white opacity-80" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <h3 className="text-xl font-bold">Latest Performance</h3>
                <p className="text-sm text-gray-300">Live at Music Festival 2023</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

function PlatformLink({
  icon,
  name,
  href,
  color,
}: {
  icon: React.ReactNode;
  name: string;
  href: string;
  color: string;
}) {
  return (
    <Link
      to={href}
      className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/10 transition-all group"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className={`w-10 h-10 flex items-center justify-center rounded-md bg-gradient-to-br ${color} shadow-lg group-hover:scale-105 transition-transform`}
      >
        {icon}
      </div>
      <span className="font-medium">{name}</span>
      <ExternalLink
        size={16}
        className="ml-auto opacity-50 group-hover:opacity-100 transition-opacity"
      />
    </Link>
  );
}

export default Artist;
