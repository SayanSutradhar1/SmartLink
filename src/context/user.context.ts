import { createContext, type Dispatch, type SetStateAction } from "react";

interface DataForSmartLink {
  bio?: string;
  labelName: string;
  facebook?: string;
  appleMusic?: string;
  instagram?: string;
  spotify?: string;
  ytMusic?: string;
  profilePicture?: string;
  tracks: {
    albumId: string;
    artist: string;
    thumbnail: string;
    trackName: string;
    trackId: string;
  }[];
  totalTracks: number;
}

interface UserContextType{
    popularSection : DataForSmartLink["tracks"] | undefined
    profileData : DataForSmartLink | undefined
    setPopularSection : Dispatch<SetStateAction<DataForSmartLink["tracks"] | undefined>>
    setProfileData : Dispatch<SetStateAction<DataForSmartLink | undefined>>
    totalTrack : number | undefined
}

export const UserContext = createContext<UserContextType>({
    profileData : undefined,
    popularSection : undefined,
    setProfileData : ()=>{},
    setPopularSection : ()=>{},
    totalTrack : undefined
})