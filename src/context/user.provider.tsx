import type { ApiResponse } from "@/interfaces/api.interface";
import type { DataForSmartLink } from "@/interfaces/profile.interface";
import { apiGet } from "@/lib/apiFetch";
import { SWALAY_MAIN } from "@/utils/constants";
import { useEffect, useState, type ReactNode } from "react";
import { UserContext } from "./user.context";
import ArtistSkeleton from "@/components/Shared/ArtistSkeleton";
import { useLocation, useParams } from "react-router-dom";

const UserProvider = ({ children }: { children: ReactNode }) => {
  const { uniqueUsername } = useParams<{ uniqueUsername: string }>();
  const location = useLocation()

  const [profileData, setProfileData] = useState<
    DataForSmartLink | undefined
  >();
  const [isLoading, setIsLoading] = useState(true);
  const [totalTrack, setTotalTrack] = useState<number>();

  const [popularSection, setPopularSection] =
    useState<DataForSmartLink["tracks"]>();

  const fetchProfile = async (uniqueUsername: string) => {
    try {
      const res = (await apiGet(
        `/api/smartlink/getProfile?uniqueUsername=${uniqueUsername}`
      )) as ApiResponse<DataForSmartLink>;

      console.log(res);

      if (!res.data) {
        window.location.href = SWALAY_MAIN;
      }

      if (res.success) {
        setProfileData(res.data);
        const length =
          res.data?.tracks.length && res.data.tracks.length > 10
            ? 10
            : res.data?.tracks.length;

        setPopularSection(res.data?.tracks.slice(0, length || 10));
        setTotalTrack(res.data?.totalTracks);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if(location.pathname==="/") return
    setIsLoading(true);
    fetchProfile(uniqueUsername!);
  }, [uniqueUsername]);

  if (isLoading) {
    return <ArtistSkeleton />;
  }

  return (
    <UserContext.Provider
      value={{
        popularSection,
        profileData,
        setPopularSection,
        setProfileData,
        totalTrack,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
