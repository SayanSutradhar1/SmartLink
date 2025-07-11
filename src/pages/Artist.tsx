import axios from "axios";
import { Instagram, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { FaSpotify } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

interface DataForSmartLink {
  bio?: string;
  labelName: string;
  facebook?: string;
  appleMusic?: string;
  instagram?: string;
  spotify?: string;
  ytMusic?: string;
  profilePicture?: string;
  albums: {
    albumId: string;
    albumTitle: string;
    albumThumbnail: string;
    albumLanguage: string;
    albumGenre: string;
  }[];
  tracks: {
    albumId: string;
    albumTitle: string;
    albumThumbnail: string;
    trackName: string;
    audioFile: string;
    platformLinks: {
      [key: string]: string | null;
    };
    singers: {
      artistName: string;
    }[];
  }[];
}

export default function Artist() {
  const { uniqueUsername } = useParams<{ uniqueUsername: string }>();

  const [profileData, setProfileData] = useState<
    DataForSmartLink | undefined
  >();

  const fetchProfile = async (uniqueUsername: string) => {
    try {
      const apiResponse = await axios.get(
        `${
          import.meta.env.VITE_SWALAY_CLIENT
        }/api/smartlink/getProfile?uniqueUsername=${uniqueUsername}`
      );

      const res = apiResponse.data as {
        success: boolean;
        message: string;
        status: number;
        data: DataForSmartLink;
      };

      console.log(res);

      if (res.success) {
        setProfileData(res.data);
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

    <div className="min-h-screen bg-black lg:bg-black">
      <div className="min-h-screen bg-gradient-to-b from-amber-900/20 via-black to-black text-white max-w-md mx-auto lg:max-w-lg xl:max-w-xl lg:bg-black">
        {/* Hero Section */}
        <div className="relative h-100 overflow-hidden">
          <img
            src={`${import.meta.env.VITE_PUBLIC_AWS_S3_FOLDER_PATH}/user/${
              profileData?.profilePicture
            }`}
            className="absolute inset-0 bg-cover bg-center object-cover h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="relative h-full flex flex-col justify-end p-6">
            <h1 className="text-3xl font-bold">{profileData?.labelName}</h1>
          </div>
        </div>

        <div className="px-6">
          {/* Bio Section */}
          <div className="pb-3">
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              {profileData?.bio}
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">
              {profileData?.facebook && (
                <Link
                  to={profileData?.facebook}
                  className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center"
                >
                  <span className="text-white text-xs font-bold">f</span>
                </Link>
              )}
              {profileData?.instagram && (
                <Link
                  to={profileData?.instagram}
                  className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center"
                >
                  <Instagram className="w-4 h-4 text-white" />
                </Link>
              )}
              {profileData?.spotify && (
                <Link
                  to={profileData?.spotify}
                  className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center"
                >
                  <FaSpotify className="w-4 h-4 text-white" />
                </Link>
              )}
            </div>
          </div>

          {/* Popular Section */}
          <div className="pb-3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Popular</h2>
            </div>

            <div className="space-y-3">
              {profileData?.tracks.map((song, index) => (
                <Link
                  to={`/songs/${song.trackName}`}
                  key={index}
                  className="flex items-center gap-3 group hover:bg-white/10 p-2 rounded-lg transition-colors"
                >
                  <img
                    src={
                      `${
                        import.meta.env.VITE_PUBLIC_AWS_S3_FOLDER_PATH
                      }/albums/07c1a${song.albumId}ba3/cover/${
                        song.albumThumbnail
                      }` || "/placeholder.svg"
                    }
                    alt={song.trackName}
                    className="w-12 h-12 rounded object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-white">{song.trackName}</h3>
                    <p className="text-gray-400 text-sm">
                      {song.singers.map((s, i) => (
                        <span key={i}>{s.artistName}</span>
                      ))}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Singles Section */}
          <div className="pb-3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Singles</h2>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 ">
              {profileData?.tracks.map((single, index) => (
                <Link
                  to={`/songs/${single.trackName}`}
                  key={index}
                  className="group"
                >
                  <div className="relative mb-2 ">
                    <img
                      src={
                        `${
                          import.meta.env.VITE_PUBLIC_AWS_S3_FOLDER_PATH
                        }/albums/07c1a${single.albumId}ba3/cover/${
                          single.albumThumbnail
                        }` || "/placeholder.svg"
                      }
                      alt={single.trackName}
                      className="aspect-square w-full rounded object-cover"
                    />
                    <button className="absolute bottom-2 right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-4 h-4 text-black fill-black ml-0.5" />
                    </button>
                  </div>
                  <h3 className="font-medium text-white text-xs truncate">
                    {single.trackName}
                  </h3>
                  <p className="text-gray-400 text-xs truncate">
                    {single.singers.map((s, i) => (
                      <span key={i}>{s.artistName}</span>
                    ))}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          {/* Albums Section */}
          <div className=" pb-3">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Albums</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 w-full gap-4">
              {profileData?.albums.map((album, index) => (
                <div key={index} className="group">
                  <div className="relative mb-2">
                    <img
                      src={
                        `${
                          import.meta.env.VITE_PUBLIC_AWS_S3_FOLDER_PATH
                        }/albums/07c1a${album.albumId}ba3/cover/${
                          album.albumThumbnail
                        }` || "/placeholder.svg"
                      }
                      alt={album.albumTitle}
                      className="w-full aspect-square rounded object-cover"
                    />
                    <button className="absolute bottom-2 right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Play className="w-4 h-4 text-black fill-black ml-0.5" />
                    </button>
                  </div>
                  <h3 className="font-medium text-white text-sm">
                    {album.albumTitle}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
