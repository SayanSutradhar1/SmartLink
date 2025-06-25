import type React from "react";
import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";

// import {data as Data} from "@/utils/data"

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

interface ContextType {
    data?: DataForSmartLink;
    setData : Dispatch<SetStateAction<DataForSmartLink | undefined>>
}

interface ProviderProps {
  children: ReactNode;
}

export const DataContext = createContext<ContextType | null>(null);

const ContextProvider: React.FC<ProviderProps> = ({ children }) => {

    const [data, setData] = useState<DataForSmartLink | undefined>();

  return <DataContext.Provider value={{data,setData}}>{children}</DataContext.Provider>;
};

export default ContextProvider;
