export interface DataForSmartLink {
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